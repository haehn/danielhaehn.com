---
title: Brown CS
revealOptions:
    viewDistance: 1
    transition: 'slide'
    keyboard: true
---

Note: Good Afternoon!<br><br>We do not fully understand the brain and we... machine learning methods
<br><br>but i think we can all agree that the brain is superior to artificial intelligence.<br><br>For instance, CNNs work extremely well on certain CV tasks, but the ability to generalize, reason, or understand is somewhat limited.<br><br>So how can we change that?
---

<iframe id='xtk0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='kasthuri3d/'></iframe>

Note: I am big fan of micro-scale connectomics. There, we look at high-res images that show individual neurons.<br>spiny dendrites and the long axons<br>manually annotated, took months. part of very small less 50 micron volume.<br>over 80 billion neurons in a human, we need automatic processing.

---

<iframe id='3dxp0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='100microns/'></iframe>

Note: 20 largest neurons in a 100 micron volume of tissue.<br>automatically segmented<br>just the images are 2 terabytes<br>imagine a dense segmentation.. it is hard<br>let's look again at some manual segmentation

---

<video width="100%" height="100%" autoplay muted>
  <source src="cylindervideo/video.mp4" type="video/mp4">
</video>

Note: note the variety of shapes that were manually segmented..<br><br>we don't even know how many neuron types really exist yet<br><br>so doing this automatically is hard!

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

---

<iframe id='cnn0' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='cnnangle/'></iframe>

Note: Machine Perception

---

<iframe id='cnn1' style='position:fixed; top:0px; left:0px; width:100%; height:100%;' data-src='cnnlength/'></iframe>

Note: Machine Perception

---

<span class='fragment fade-in'>Machine Learning</span>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<span class='fragment fade-in'>Neurobiology</span>

Note: test note

---


Bar

----

Sub Bar

---

The End.
