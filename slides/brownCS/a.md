---
title: Brown CS
revealOptions:
    viewDistance: 1
    transition: 'slide'
    keyboard: true
---
<!-- (c) Daniel Haehn, https://danielhaehn.com, contact me for questions! -->

Note: Good Afternoon!<br><br>We do not fully understand the brain and machine learning methods
<br><br>brain is superior to artificial int.<br><br>For instance, CNNs work extremely well, but can't generalize, reason, or understand is somewhat limited.<br><br>And the brain can do that<br><br>That's why we should try to understand it better
---

<iframe id='xtk0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='kasthuri3d/'></iframe>

Note: I am big fan of micro-scale connectomics.<br><br>In a few seconds NEURONS will pop up<br>traced in high-res images<br>spiny dendrites and the long axons<br>manually annotated, took months.<br>subset of 3 cylinders

---

<video width="100%" height="100%" autoplay muted>
  <source src="cylindervideo/video.mp4" type="video/mp4">
</video>

Note: This is the goal<br><br>note the variety of shapes that were manually segmented..<br><br>we don't even know how many neuron types really exist yet<br><br>we need autom processing but it is hard!

---

<iframe id='3dxp0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='100microns/'></iframe>

Note: 20 largest neurons in a 100 micron volume of tissue.<br>automatically segmented<br>just the images are 2 terabytes<br>imagine a dense segmentation.. it is hard<br>let's look again at some manual segmentation

---

<img src='hairball/label2.png'  border=0 style='border:none;'>

Note: our algorithm thought that this is one single neuron.. we call it the hairball.<br><br>but how do we even get the data in the first place?

---

<img src='animaltobrainscan/mouse.png' class='myimg fragment fade-in' data-fragment-index="1" style='width:100px;position:absolute;left:100px;'>
<img src='animaltobrainscan/rat.png' class='myimg fragment fade-in' data-fragment-index="2" style='width:200px;position:absolute;left:140px;'>
<img src='animaltobrainscan/human.png' class='myimg fragment fade-in' data-fragment-index="3" style='width:200px;margin-left:-250px;margin-top:-30px'>

<img src='animaltobrainscan/brains.png' class='myimg fragment fade-in' data-fragment-index="4" style='width:200px;position:absolute;top:30px;right:100px'>

<img src='animaltobrainscan/slices.jpeg' class='myimg fragment fade-in' data-fragment-index="5" style='width:300px;position:absolute;top:250px;left:170px'>

<img src='animaltobrainscan/em.png' class='myimg fragment fade-in' data-fragment-index="6" style='position:absolute;max-height:none;width:200px;top:200px;left:650px'>

Note: well... we take mice, rats, or humans<br><br>cut out their brains or pieces of it<br><br>slice it extremely thinly<br><br>...and scan it with an electron microscope<br><br>this happens in 2D!

---

<video width="100%" height="100%" autoplay muted>
  <source src="animaltobrainscan/bobbyzoom.mp4" type="video/mp4">
</video>

Note: ...and we end up with image slices that get aligned to volumes.<br><br>Now we need to find the cell membranes.

---

<img src='segmentation/labels.png' border=0 style='height:512.99px;border:none;'>

Note: We do this automatically and there are a variety of different methods<br><br>U-Nets and watershed, over floodfilling networks, affinity-based approaches, Seere Lab<br><br>but the automatic segmentations are not perfect

---

<img src='segmentation/zoom.png' border=0 style='height:512.99px;border:none;'>

Note: let's take a closer look and zoom in

---

<img src='segmentation/zoom2.png' border=0 style='height:512.99px;border:none;'>

Note: because there are nice errors here

---

<img src='segmentation/zoom3errors.png' border=0 style='height:512.99px;border:none;'>

Note: please focus on these labels and the regions marked with arrows

---

<img src='segmentation/zoom4errors_membranes.png' border=0 style='height:512.99px;border:none;'>

Note: these are two cells and the membranes are shown here.<br><br>the labeling should look different

---

<img src='segmentation/zoom5labels.png' border=0 style='height:512.99px;border:none;'>

<span class='myimg fragment fade-in' data-fragment-index="1" style='color:red; position: absolute;top:450px;left:470px'>Wrong</span>

<span class='myimg fragment fade-in' data-fragment-index="2" style='color:MediumSeaGreen; position: absolute;top:450px;left:660px;'>Correct</span>

Note: like that...<br><br>(click 2x) How do we get from the wrong labeling on the left to the correct labeling on the right?

---

<img src='segmentation/human.png' border=0 style='border:none;'>

Note: And the answer is proofreading by humans.

---

<span class='fragment fade-in' data-fragment-index="2" style='left:0px; top:-30px; position:absolute;'>Split Error</span>
<span class='fragment fade-in' data-fragment-index="5" style='left:0px; top:170px;position:absolute;'>Merge Error</span>
<svg width='100%' height='400' style='margin-left:50px'>
    <!-- Split Error -->
    <rect class='fragment fade-in' data-fragment-index="2" width="150" height="100" x="0" y="0" fill="hotpink"></rect>
    <rect class='fragment fade-in' data-fragment-index="2" width="150" height="100" x="150" y="0" fill="yellow"></rect>
    <polygon class='fragment fade-in' data-fragment-index="3" points="350,40 369.5,40 369.5,30 389,45.5 369.5,61 369.5,52 350,52" fill="rgb(255, 255, 255)"></polygon>
    <rect class='fragment fade-in' data-fragment-index="4" width="300" height="100" x="450" y="0" fill="hotpink"></rect>
    <!-- Merge Error -->
    <rect class='fragment fade-in' data-fragment-index="5" width="300" height="100" x="0" y="200" fill="hotpink"></rect>
    <polygon class='fragment fade-in' data-fragment-index="6" points="350,240 369.5,240 369.5,230 389,245.5 369.5,261 369.5,252 350,252" fill="rgb(255, 255, 255)"></polygon>
    <rect class='fragment fade-in' data-fragment-index="7" width="250" height="100" x="450" y="200" fill="hotpink"></rect>
    <rect class='fragment fade-in' data-fragment-index="7" width="50" height="100" x="700" y="200" fill="cyan"></rect>    
</svg>

Note: One way to correct these errors is interactively.

---

<img src='related_work_dojo/raveler.png' border=0 style='border:none;height:400px'><br>Raveler

Note: Raveler, Expert Tool by Janelia<br><br>room full of proofreaders

---

<img src='related_work_dojo/mojo.png' border=0 style='border:none;height:400px'><br>Mojo

Note: Mojo, in-house software<br><br>windows only

---

<img src='related_work_dojo/eyewire.png' border=0 style='border:none;height:400px'><br>Eyewire

Note: Citizen science<br><br>for less complex data and only split errors<br><br>others are webknossos, or mozak

---

<iframe id='gp0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='http://localhost:1337/dojo/'></iframe>

<span style='position:absolute;z-index:1000;font-size:20px;top:600px;left:150px;width:650px'>D. Haehn, S. Knowles-Barley, M. Roberts, J. Beyer, N. Kasthuri, J.W. Lichtman, and H. Pfister. <b>Design and Evaluation of Interactive Proofreading Tools for Connectomics.</b> <i>IEEE Transactions on Visualization and Computer Graphics (IEEE SciVis)</i>, 2014.</span>

Note: Dojo Live Demo... slices<br>3D<br>merge<br>split<br><br>quantitative user study

---

Raveler vs. Mojo vs. Dojo<br><br>
<span class='fragment fade-in' data-fragment-index="2">30 Participants (17 female, avg. 27 years)</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="3">Small Dataset (400x400x10 voxels)
</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="4">Fixed Timeframe (30 minutes)</span>

Note: between subjects user study<br><br>from all walks of life<br><br>proofread a representative dataset in a fixed time frame of 30 minutes<br><br>and surprise: most people made the initial segmentation worse!!

---

<img src='dojo_results/vi2.png' border=0 style='border:none;'>

<span class='fragment fade-in' data-fragment-index="1" style='position:absolute;color:hotpink;top:440px;right:100px;'>Baseline</span>

Note: We measure how well users correct the segmentations by comparing against the ground truth.<br><br>VI, the lower, the better<br><br>Users of Dojo were able to fix more errors<br><br>we think: no parameters with dojo, a better 3D viewer, and a minimal user interface helped.. BUT

---

The visual search for errors takes a long time!

Note: Average correction time with Dojo was 30 seconds.<br><br>what if we can present errors to the user automatically?<br><br>we were not the only ones thinking along these lines...

---

<img src='relatedwork_gp/fp.png' border=0 style='border:none;height:400px'><br>Focused Proofreading

Note: by Janelia, runs originally in Raveler and suggests errors to the user based on probabilities of a random forest classifier<br><br>we thought whether we can do that better

---

<iframe id='gp0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='http://140.247.107.121:21000/'></iframe>

<span style='position:absolute;z-index:1000;font-size:20px;top:400px;left:100px;width:700px'>D. Haehn, V. Kaynig, J. Tompkin, J.W. Lichtman, H. Pfister. <b>Guided Proofreading of Automatic Segmentations for Connectomics.</b> <i>IEEE Computer Vision and Pattern Recognition (CVPR)</i>, 2018.</span>

<!-- (nolearn) d@viper:~/Projects/gp_TEST/ui (master@e896-)$>./ui.py 21000 /tmp/343242 GP -->

Note: The Guided Proofreading system<br><br>this way, we can reduce the correction time by a factor of 7.5times<br><br>CVPR 2018<br><br>so how do we suggest the errors? we train a convolutional neural network

---

<img src='gp/cnn.png' border=0 style='border:none;height:400px'>

Note: we train a pretty traditional classifier with<br><br>4 conv layers<br><br>to detect split errors only!<br><br>let's take a closer look at the inputs

---

<img src='gp/patch.png' border=0 style='border:none;'><img class='fragment fade-in' data-fragment-index="1" src='gp/groundtruth.png' border=0 style='border:none;'>

<img class='fragment fade-in' data-fragment-index="2" src='gp/inputs.png' border=0 style='border:none;'><br><span class='fragment fade-in' data-fragment-index="3">CNN suggests to merge</span>

Note: we patch up our input data (slice by slice)<br><br>here an example split error<br><br>now 4 channel input (image, unet prob, merged labels, border mask)<br><br>cnn suggests to merge with a high score<br><br>so this works for split errors, but we re-use the same classifier for merge errors

---

<img src='gp/mergeerror.png' border=0 style='border:none;'>

<img class='fragment fade-in' data-fragment-index="2" src='gp/mergeborders.png' border=0 style='border:none;'><img class='fragment fade-in' data-fragment-index="3" src='gp/aftermerge.png' border=0 style='border:none;'>

Note: here is a merge error<br><br>there should be a boundary according to ground truth<br><br>soooo what we do is, we generate many different boundaries<br><br>and score each one with the classifier<br><br>if the classifier says it is a correct boundary (meaning not a split error)<br><br>this is most likely where the boundary was missing<br><br>

---

Focused Proofreading vs. Guided Proofreading<br><br>
<span class='fragment fade-in' data-fragment-index="2">20 Novices / 2 Experts</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="3">Same Dataset as before (400x400x10 voxels)
</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="4">Fixed Timeframe (30 minutes)</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="5">Same User Interface
</span>

Note: another user study<br><br>again novices from the street<br><br>same dataset, again 30 minutes<br><br>instead of raveler, same user interface for FP and GP<br><br>and this time people proofread much better

---

<img src='gp_results/vi.png' border=0 style='border:none;'>

<span class='fragment fade-in' data-fragment-index="1" style='position:absolute;color:hotpink;top:150px;right:65px;'>Baseline</span>

Note: again VI: the lower, the better, on the x-axis is the corrections over time<br><br>novices almost as good as experts<br><br>baseline is the input segmentation<br><br>since we used the same data as before, we can also compare against interactive proofreading with dojo

---

<img src='gp_results/vsdojo.png' border=0 style='width:400px;border:none;'>

<span class='fragment fade-in' data-fragment-index="1" style='position:absolute;color:hotpink;top:190px;right:165px;'>Baseline</span>

Note: All novices here.<br><br>Dojo is fully interactive and GP is just so much better. Reducing the time for visual search by a factor of 7.5 pays off.<br><br>Takeaways...

---

<span class='fragment fade-in' data-fragment-index="1">Proofreading will always be necessary</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="2">Humans will be the bottleneck</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="3">Minimizing manual work is the goal</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="4"><img src='future_proofreading/brian.png' style='width:250px;margin-bottom:30px;margin-right:50px;'><img src='future_proofreading/zudi.png' style='width:250px'></span>

Note: Segmentation methods will not be perfect / we will always be uncertain to a degree because of the huge variability<br><br>before proofreading, lets find ways of automatically improving the segmentation<br><br>two methods under review<br><br>Dojo and Guided Proofreading open science (code/results/data) online

---

<span class='fragment fade-in' data-fragment-index="2">Machine Perception</span>
<img class='fragment fade-in' data-fragment-index="2" style='width:200px;position: absolute;top: 80px;left: 170px;z-index: -2;' src='transition/stimuli.png'>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<img class='fragment fade-in' data-fragment-index="1" src='transition/neurons.png'>
<span class='fragment fade-in' data-fragment-index="1" style='position:absolute;bottom:140px;right:200px;'>Neurobiology</span>

Note: I would like to now move from bottom-up neurobiology studies<br><br>to top-down machine perception research.<br><br>I will now talk about work we just presented at the IEEE Visualization conference in Berlin.<br><br>We test how CNNs are able to perceive simple graphical stimuli.

---

<iframe id='cnn0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='cnnangle/'></iframe>

<span style='position:absolute;z-index:1000;font-size:20px;top:400px;left:100px;width:700px'>D. Haehn, J. Tompkin, H. Pfister. <b>Evaluating 'Graphical Perception' with CNNs.</b> <i>IEEE Transactions on Visualization and Computer Graphics (IEEE Vis)</i>, 2018.</span>

Note: For instance, here I can draw an angle.<br><br>and the VGG19 network estimates it<br><br>as you see that works pretty well<br><br>but what if we modify the stimuli?

---

<iframe id='cnn1' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='cnnlength/'></iframe>

<span style='position:absolute;z-index:1000;font-size:20px;top:400px;left:100px;width:700px'>D. Haehn, J. Tompkin, H. Pfister. <b>Evaluating 'Graphical Perception' with CNNs.</b> <i>IEEE Transactions on Visualization and Computer Graphics (IEEE Vis)</i>, 2018.</span>

Note: Here we draw two lines.<br><br>left: thin line<br><br>right: thick one<br><br>the network estimates the length

---

<iframe id='perception0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='https://docs.google.com/presentation/d/e/2PACX-1vSd_XkQInllkTc_IUDVVI5H3WH4ntbl98uCZCedtV9qXzbwdQGjOytlvXGlJClPkHGquWFbFGdbTqUZ/embed?start=false&loop=false&delayms=60000'></iframe>

---

Thank you!

<img src='thankyou/octocat.png' style='width:200px'><br><br>

<a href='https://danielhaehn.com/slides/brownCS'>danielhaehn.com/slides/brownCS</a><br><br>
<small><a href='http://ratemytalk.com/MMPRL8'>RateMyTalk.com/MMPRL8</a></small>

Notes: Done and done




