---
layout: post
title: Threaded Tornado
---

![Tornado Webserver]({{ site.baseurl }}/gfx/posts/tornado_small.png "Tornado Webserver"){: .thumb .underlay} The [Tornado webserver](http://www.tornadoweb.org/) is an awesome web framework for Python. Unfortunately, configuring it for asynchronous requests can get quite confusing.

Here is a simple and minimal example, [John](http://blog.hoff.in) and I created. <!-- more --> It was inspired by several other examples, such as [the official documentation](http://www.tornadoweb.org/en/stable/guide/async.html), [the official faq](http://www.tornadoweb.org/en/stable/faq.html) and [this GIST](ask john).

The main component is the following decorated `@tornado.gen.coroutine`-skeleton:

```python
@tornado.gen.coroutine
def SOME_HANDLER(self):

  # we need a ThreadPoolExecutor!
  SOME_RESULT = yield EXECUTOR.submit(SOME_OTHER_FUNCTION,
                                      SOME_ARGUMENT_1=SOME_VALUE,
                                      SOME_ARGUMENT_2=ANOTHER_VALUE)

  self.write(SOME_RESULT)
```

The `EXECUTOR` is a `ThreadPoolExecutor` - coming from the [future](https://docs.python.org/3/library/concurrent.futures.html)! By using this skeleton, `SOME_OTHER_FUNCTION` gets called in a _non-blocking_ way (which is the whole point). 

Below is a full example which sets up tornado on port 8888. As soon as a client connects, an external `Core` instance handles the request and artificially sleeps for ten seconds. During this sleep, nothing is blocked.


```python
import time 
import tornado
import tornado.gen
import tornado.web
from concurrent.futures import ThreadPoolExecutor # pip install futures



class Core():
  '''
  The core can be anything outside of tornado!
  '''

  def get(self, remote_ip):

    print 'going to sleep', remote_ip
    time.sleep(10)
    print 'done sleeping', remote_ip

    return 'msg to client ' + remote_ip



class MainHandler(tornado.web.RequestHandler):
  '''
  Our custom request handler who implements a co-routine
  and forwards the calls to an external class instance (core).
  '''

  def initialize(self, executor, core, webserver):
    self._executor = executor
    self._core = core
    self._webserver = webserver

  @tornado.gen.coroutine
  def get(self, uri):
    '''
    This method has to be decorated as a coroutine!
    '''
    ip = self.request.remote_ip

    #
    # yield is important here
    # and obviously, the executor!
    #
    # we connect the get handler now to the core
    #
    res = yield self._executor.submit(self._core.get, remote_ip=ip)

    self.write(res)



class WebServer:

  def __init__(self, port=8888):
    '''
    '''
    self._port = port

  def start(self, core):
    '''
    '''

    # the important part here is the ThreadPoolExecutor being
    # passed to the main handler, as well as an instance of core
    webapp = tornado.web.Application([
        (r'(/)', MainHandler, {'executor':ThreadPoolExecutor(max_workers=10),
                               'core':core,
                               'webserver':self})
    ])
    webapp.listen(self._port)
    tornado.ioloop.IOLoop.instance().start()



#
# THE ENTRYPOINT
#
core = Core()
ws = WebServer()
ws.start(core)

```

Run the python code and then use the following bash code to simulate multiple parallel requests (via curl, since browsers skip forced multiple requests):

```bash
for V in 1 2 3 4 5 6 7 8 9 10 11 12 13
do
  curl -i http://localhost:8888/ &
done
````

Then, tornado will print something along these lines...


```
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
going to sleep 127.0.0.1
done sleeping 127.0.0.1
going to sleep 127.0.0.1
done sleeping 127.0.0.1
going to sleep 127.0.0.1
done sleeping 127.0.0.1
going to sleep 127.0.0.1
done sleeping 127.0.0.1
done sleeping 127.0.0.1done sleeping 127.0.0.1

 done sleeping done sleeping127.0.0.1 
127.0.0.1
done sleeping 127.0.0.1
done sleeping 127.0.0.1
done sleeping 127.0.0.1
done sleeping 127.0.0.1
done sleeping 127.0.0.1
```

...Ten requests ran fully async. Yippee!!
