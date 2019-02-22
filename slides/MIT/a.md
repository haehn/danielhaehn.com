---
title: MIT Senseable Intelligence Group
revealOptions:
    viewDistance: 1
    transition: 'slide'
    keyboard: true
---
<!-- (c) Daniel Haehn, https://danielhaehn.com, contact me for questions! -->

Note: Thank you<br><br>Satra and I met a little over 7 years ago<br><br>worked together<br><br>

---
<img src='welcome/satra_and_me_2012.jpg' class='myimg'><br><span style='font-size:20px;position:absolute;left:30px'>INCF Neuroinformatics 2012</span>

Note: Neuroinformatics conference<br><br>Satra is clearly not impressed with my work<br><br>hopefully today you will be, satra
---
<img src='welcome/defense_invitation.png' style='width:500px;' class='myimg'>

Note: i will defend my phd at the beginning of april<br><br>there is a performance gap between the brain and artificial intelligence and we need to work from both ends to reduce it<br><br>start with a video showing this gap in the field of soccer
---
<video width="50%" height="50%" autoplay muted>
  <source src="messi_vs_robot/video.mp4" type="video/mp4">
</video><br>
<span style='font-size:20px'>Lex Fridman, MIT 6.S099 Artificial General Intelligence</span>

Note: messi at age 19<br><br>a recent robot soccer worldcup in the bottom<br><br>competition between the machines and humans are exciting to us

---

<img src='robot_beats_human/kasparov.jpeg' class='myimg' style='z-index:0'>

<img src='robot_beats_human/leesedol.png' class='myimg fragment fade-in' data-fragment-index="2" style='z-index:10; position: absolute; right:-50px;top:-100px'>

<img src='robot_beats_human/alphastar.png' class='myimg fragment fade-in' data-fragment-index="3" style='z-index:10; position: absolute; left:-150px;top:-10px'>

Note: Deep(er) Blue beats a chess champion in 1997<br><br>2015 and 2016 Alpha Go beats some of the best players of the board game Go<br><br>2019 AlphaStar beats an expert StarCraft player

---

<div style='position:relative;left:50px;width:500px;z-index:0'>
<img src='robot_beats_human/superhuman_connectomics.png' class='myimg'><br><span style='font-size:20px;position:absolute;left:20px'>Lee et al., arXiv 2017</span>
</div>

<div class='fragment fade-in' data-fragment-index="2" style='position:relative;top:30px;width:500px;right:-300px;z-index:0'>
<img src='robot_beats_human/superhuman_poker.png' class='myimg' ><br><span style='font-size:20px;position:absolute;left:20px'>Brown and Sandholm, Science 2018</span>
</div>

Note: superhuman performance of automatic segmentation<br><br>or in poker<br><br>
<br><br>researchers also show limitations
---

<div style='position:relative;left:50px;width:500px;z-index:0'>
<img src='ai_limitations/schoolbus.jpg' class='myimg'><br><span style='font-size:20px;position:absolute;left:20px'>Alcorn et al., arXiv 2018
</div>

<div class='fragment fade-in' data-fragment-index="2" style='position:relative;top:30px;width:200px;right:-300px;z-index:0'>
<img src='ai_limitations/perception_errors.png' class='myimg' ><br><span style='font-size:20px;position:absolute;left:20px'>Our work at IEEE Vis 2018</span>
</div>

Note: alcorn's work strike with a pose, inception network<br><br>later in my talk, i will discuss our work on graphical perception of machines<br><br>

---

<img src='the_gap/perception.002.png' style='position:fixed;top:0px;left:0px;z-index:0'>

<img src='the_gap/perception.003.png' class='myimg fragment fade-in' data-fragment-index="2" style='position:fixed;top:0px;left:0px;z-index:1'>

<img src='the_gap/perception.004.png' class='myimg fragment fade-in' data-fragment-index="3" style='position:fixed;top:0px;left:0px;z-index:2'>

<img src='the_gap/perception.005.png' class='myimg fragment fade-in' data-fragment-index="4" style='position:fixed;top:0px;left:0px;z-index:3'>

<img src='the_gap/perception.006.png' class='myimg fragment fade-in' data-fragment-index="5" style='position:fixed;top:0px;left:0px;z-index:4'>

<img src='the_gap/perception.007.png' class='myimg fragment fade-in' data-fragment-index="6" style='position:fixed;top:0px;left:0px;z-index:5'>

Note: so there is a performance gap between the brain and AI<br><br>I am big fan of micro-scale connectomics.

---

<div style='position:fixed; top:150px; left:0px;width:50%;'>
    <img src='the_gap/cajal.png' class='myimg'><br><span style='font-size:20px;position:absolute;left:20px'>Santiago Ramón y Cajal, 1933</span>
</div>

<div style='position:fixed; top:150px; right:0px;width:50%;' class='fragment fade-in' data-fragment-index="2">
    <img src='the_gap/neurons.png' class='myimg'><br><span style='font-size:20px;position:absolute;right:80px;margin-top:-20px;'>Connectomics Data</span>
</div>

Note: drawings of cajal in 1933<br><br>

---

<video width="100%" height="100%" autoplay muted>
  <source src="cylindervideo/video.mp4" type="video/mp4">
</video><br><span style='font-size:20px;position:absolute;left:30px'>Kasthuri et al., Cell 2015</span>

Note: This is the goal<br><br>note the variety of shapes that were manually segmented..<br><br>we don't even know how many neuron types really exist yet<br><br>we need autom processing but it is hard!

---
<div style='position:fixed; top:150px; left:0px;width:100%;height:100%'>
    <img src='100microns/anim.gif' class='myimg'>
</div>

Note: automatically segmented<br>just the images are 2 terabytes<br>imagine a dense segmentation.. it is hard<br>let's look again at some automatic segmentation

---

<img src='hairball/label2.png'  border=0 style='border:none;'>

Note: our algorithm thought that this is one single neuron.. we call it the hairball.<br><br>segmentation in connectomics is hard<br><br>but how do we even get the data in the first place?

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
</video><br><span style='font-size:20px;position:absolute;left:30px'>Kasthuri et al., Cell 2015</span>

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

<span style='left:0px; top:-30px; position:absolute;'>Split Error</span>
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
<span class='fragment fade-in' data-fragment-index="2">20 Novices / 4 Experts</span>
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

<img src='the_gap/perception.007.png' class='myimg' style='position:fixed;top:0px;left:0px;z-index:0'>

<img src='the_gap/perception.008.png' class='myimg fragment fade-in' data-fragment-index="2" style='position:fixed;top:0px;left:0px;z-index:1'>


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

<img src='cleveland_mcgill/paper.png'><br><span style='font-size:20px;position:absolute;left:60px'>Cleveland and McGill, Journal of the American Statistical Association 1984</span>


Note: experiments of human perception when it comes to perceiving visualizations such as pie charts or bar charts

---

We replicate Cleveland and McGill's 1984 experiments<br><br>with Convolutional Neural Networks.

Note: Instead of human perception, we study machine perception<br><br>
by replicating Cleveland and McGill's 1984 experiments with<br><br>
Convolutional Neural Networks

---

A computational model of human graphical perception would allow:<br><br>
a) to score existing visualizations<br><br>
b) to create new visualizations

Note: And why are we doing this?<br><br>judge/score/evaluate existing<br><br>create new optimized visualizations automatically

---

<span style='font-size:60px'>Can CNNs model human graphical perception?</span>

Note: Since CNNs are said to model the early layers of the visual cortex,<br><br>we ask

---

<img src='cleveland_mcgill/spoileralert.jpg' class='myimg' style='position:fixed;top:0px;left:0px;z-index:0'>

<img src='cleveland_mcgill/spoileralert_no.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:0px;left:0px;z-index:1'>

Note: and the answer is No!<br><br>In any case...

---

<div style='width:400px;float:left'>
<img src='cleveland_mcgill/related_work/clevr.png'><br><span style='font-size:20px;position:relative;top:-25px'>Johnson et al., CVPR 2017</span>
</div>

<div style='width:350px;float:left;margin-left:40px;margin-top:10px'>
<img src='cleveland_mcgill/related_work/not_so_clevr.png'><br><span style='font-size:20px;position:relative;top:-25px'>Ricci et al., ICML 2018</span>
</div>

<div style='width:400px;float:left;margin:100px; position:relative; top:-100px'>
<img src='cleveland_mcgill/related_work/dvqa.png'><br><span style='font-size:20px;position:relative;top:-25px'>Kafle et al., CVPR 2018</span>
</div>

<div style='width:350px;float:left;margin-top:30px; position:relative;'>
<img src='cleveland_mcgill/related_work/nsvqa.png'><br><span style='font-size:20px;position:relative;top:-25px'>Yi et al., NIPS 2018</span>
</div>

<div style='position: fixed;width:100%;height:100%;z-index:2;background:rgba(0,0,0,0.8);' class='myimg fragment fade-in' data-fragment-index="1"><br><br><br><br>
    Visual Question Answering<br><br>
    Computational Visual Reasoning
</div>

Note: related recent work at the major conferences<br>and the buzz words are..

---

<img src='cleveland_mcgill/elementary_perceptual_tasks_inv.png'><br><span style='font-size:20px;position:relative;top:-25px'>Elementary Perceptual Tasks, Cleveland and McGill 1984</span>

Note: In their paper, ClMcGill introduce the elementary perceptual tasks<br>
these building blocks are perceived by humans when understanding visualizations such as bar charts and pie charts

---

<img src='cleveland_mcgill/stimuli1_inv.png'><br><span style='font-size:20px;position:absolute;left:-30px'>Cleveland and McGill 1984</span><span style='font-size:20px;position:absolute;right:300px'>Our generated stimuli</span>

Note: position, direction, position 2

---

<img src='cleveland_mcgill/stimuli2_inv.png'><br><span style='font-size:20px;position:absolute;left:-30px'>Cleveland and McGill 1984</span><span style='font-size:20px;position:absolute;right:300px'>Our generated stimuli</span>

Note: angle<br>length..<br>sooo we let CNNs regress these generated images with certain constraints

---

<img src='cleveland_mcgill/angle_inv.png' style='width:400px;float:left;margin-left:100px'>
<span style='position:absolute;font-size:40px;margin-top:60px'>~78&deg;</span>
<span style='position:absolute;font-size:65px;margin-top:120px'>0.87</span>


Note: angles are always 0..90 degrees<br>this angle is roughly 78 degrees<br><br>mapped to 0..1 for 0..90 degrees, this yields 0.87

---

<img src='cleveland_mcgill/position_angle_inv.png'><br><span style='font-size:20px;position:relative;top:-25px'>Position-Angle Experiment, Cleveland and McGill 1984</span>

Note: Position-Angle Experiment<br>comparing human perception of pie charts and bar charts

---

<img src='cleveland_mcgill/stimuli3_inv.png'><br><span style='font-size:20px;position:absolute;left:0px'>Cleveland and McGill 1984</span><span style='font-size:20px;position:absolute;right:300px'>Our generated stimuli</span>

Note: now there are multiple values encoded in the stimuli<br><br>this means the regression task is more complex

---


<img src='cleveland_mcgill/piechart.png' class='myimg' style='position:fixed;top:100px;left:0px;z-index:0;width:400px'>

<img src='cleveland_mcgill/piechart2.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:100px;left:0px;z-index:1;width:400px'>

<img src='cleveland_mcgill/piechart3.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:100px;left:0px;z-index:2;width:400px'>

<span class='fragment fade-in' data-fragment-index="4" style='position:absolute;font-size:65px;margin-top:120px'>[0.2, 0.14, 0.6, 0.8]</span>

Note: identify the largest area in the pie chart<br><br>then, counter-clockwise, estimate the ratio of each other segment compared to the larger one<br><br>this vector of length 4 is our regression target here

---

<img src='cleveland_mcgill/position_length_inv.png'><br><span style='font-size:20px;position:relative;top:-25px'>Position-Length Experiment, Cleveland and McGill 1984</span>

Note: Position-Length Experiment<br>comparing human perception for different types of barcharts

---

<img src='cleveland_mcgill/stimuli4_inv.png'><br><span style='font-size:20px;position:absolute;left:-30px'>Cleveland and McGill 1984</span><span style='font-size:20px;position:absolute;right:300px'>Our generated stimuli</span>

Note: the third experiment is the position-length experiment

---


<img src='cleveland_mcgill/barchart.png' class='myimg' style='position:fixed;top:100px;left:0px;z-index:0;width:400px'>

<img src='cleveland_mcgill/barchart2.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:100px;left:0px;z-index:1;width:400px'>

<img src='cleveland_mcgill/barchart3.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:100px;left:0px;z-index:2;width:400px'>

<span class='fragment fade-in' data-fragment-index="4" style='position:absolute;font-size:65px;margin-top:120px'>0.5</span>

Note: more complex<br><br>find the two marked segments<br><br>identify the largest segment<br><br>then, compare the other marked segment to the larger one<br><br>regression target

---

<img src='cleveland_mcgill/position.png' class='myimg' style='position:fixed;top:100px;left:0px;z-index:0;width:400px'>

<span class='fragment fade-in' data-fragment-index="4" style='position:absolute;font-size:45px;margin-top:-100px'>100x100 pixels<br><br>5% noise per pixel<br><br>"fuzzy binary" image</span>

Note: so what about the networks?

---

<img src='cleveland_mcgill/neuralnetworks_inv.png'>

<span class='fragment fade-in' data-fragment-index="2" style='position:relative;font-size:25px;left:-100px;top:-100px'>from scratch / pretrained</span>

Note: four different network configurations<br><br>all of them use the MLP at the end<br><br>we test 3 different convolutional feature encoders<br><br>LeNet, VGG19, Xception<br><br>VGG19, Xception two versions

---


<div style='width:400px;float:left'>
<img src='cleveland_mcgill/res1.png'>
</div>

<div style='width:350px;float:left;margin-left:40px;margin-top:30px'>
<img src='cleveland_mcgill/res2.png'>
</div>

<div style='width:600px;float:left;margin:100px; position:relative; top:-100px'>
<img src='cleveland_mcgill/res3.png'>
</div>

<div style='position: fixed;width:100%;height:100%;z-index:2;background:rgba(0,0,0,0.8);' class='myimg fragment fade-in' data-fragment-index="1"><br><br><br><br>
    2500+ networks<br><br>
    > 4.7 GPU years
</div>

Note: we ran all network configurations with fixed parameters<br><br>monte carlo cross validation with 12 runs per experiment

---


<img src='cleveland_mcgill/results/elementary_plots/plots.001.png' class='myimg' style='position:fixed;top:100px;left:0px;z-index:0;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.002.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:100px;left:0px;z-index:1;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.003.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:100px;left:0px;z-index:2;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.004.png' class='myimg fragment fade-in' data-fragment-index="4"  style='position:fixed;top:100px;left:0px;z-index:3;'>

Note: error plot, the more left, the better<br><br>log scale, 2%, 10%, 50% error<br><br>human has around 10% error<br><br>vgg19 trained from scratch around 2%<br><br>and this is a pattern...<br><br>MLP interesting without convolutional filters

---

<img src='cleveland_mcgill/results/elementary_plots/plots.005.png' class='myimg' style='position:fixed;top:100px;left:0px;z-index:0;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.006.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:100px;left:0px;z-index:1;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.007.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:100px;left:0px;z-index:2;'>

Note: same for angle, VGG19 from scratch is very good

---


<img src='cleveland_mcgill/results/elementary_plots/plots.008.png' class='myimg' style='position:fixed;top:100px;left:0px;z-index:0;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.009.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:100px;left:0px;z-index:1;'>

<img src='cleveland_mcgill/results/elementary_plots/plots.010.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:100px;left:0px;z-index:2;'>

Note: and finally for length..<br><br>Now we did also cross network experiments...

---

<img src='cleveland_mcgill/results/crossnetwork/crossnetwork.001.png' class='myimg' style='position:fixed;top:10px;left:0px;z-index:0;'>

<img src='cleveland_mcgill/results/crossnetwork/crossnetwork.002.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:10px;left:0px;z-index:1;'>

<img src='cleveland_mcgill/results/crossnetwork/crossnetwork.003.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:10px;left:0px;z-index:2;'>

<img src='cleveland_mcgill/results/crossnetwork/crossnetwork.004.png' class='myimg fragment fade-in' data-fragment-index="4"  style='position:fixed;top:10px;left:0px;z-index:3;'>

Note: if we train on the length stimuli and really just vary the length<br><br>it works well on unseen testing data<br><br>but if we add slight variations such as movement in x and y, or thickness<br><br>the networks fail unless we include these variations in the training distribution

---

<img src='cleveland_mcgill/results/posangle/posangle.001.png' class='myimg' style='position:fixed;top:10px;left:0px;z-index:0;'>

<img src='cleveland_mcgill/results/posangle/posangle.002.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:10px;left:0px;z-index:1;'>

<img src='cleveland_mcgill/results/posangle/posangle.003.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:10px;left:0px;z-index:2;'>

<img src='cleveland_mcgill/results/posangle/posangle.004.png' class='myimg fragment fade-in' data-fragment-index="4"  style='position:fixed;top:10px;left:0px;z-index:3;'>

Note: now pie chart vs bar chart<br><br>humans perform better on bar charts<br><br>VGG19 pretty much the same<br><br>but all networks also prefer the bar chart<br><br>stat. significant<br><br>funny finding

---


<img src='cleveland_mcgill/results/poslength/poslength.001.png' class='myimg' style='position:fixed;top:10px;left:0px;z-index:0;'>

<img src='cleveland_mcgill/results/poslength/poslength.002.png' class='myimg fragment fade-in' data-fragment-index="2"  style='position:fixed;top:10px;left:0px;z-index:1;'>

<img src='cleveland_mcgill/results/poslength/poslength.003.png' class='myimg fragment fade-in' data-fragment-index="3"  style='position:fixed;top:10px;left:0px;z-index:2;'>



Note: humans can do it<br><br>now we have two baselines (Heer and Bostock)<br><br>the two on the right are harder since no baseline measurements<br><br>vgg19 performs worse than humans on every one and much worse than in every experiment before<br><br>just too complex, too much parametrizations<br><br>what have we learned?

---

VGG19 can estimate simple graphical stimuli very well<br><br>
<span class='fragment fade-in' data-fragment-index="2">All networks do not generalize well</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="3">We need systems that can abstract and reason
</span>
<br><br>
<span class='fragment fade-in' data-fragment-index="4" style='font-size:75px'>CNNs are not a good model for human graphical perception!</span>


Note: out-of-distribution samples<br><br>will we ever achieve such systems?<br><br>

---

<img src='the_gap/perception.009.png' class='myimg' style='position:fixed;top:0px;left:0px;z-index:0'>

<img src='the_gap/perception.010.png' class='myimg fragment fade-in' data-fragment-index="2" style='position:fixed;top:0px;left:0px;z-index:1'>


Note: So today I spoke about some advancements in regards to better understanding the brain and AI.<br><br>In reality, the gap between the two is very large<br><br>and we are just at the beginning in both fields.<br><br>
massive research efforts are on the way and I am happy to contribute a little bit.<br><br>
before I take questions, I would like to...

---

<img src='thankyou/collaborators.png'>

Note: Thank you to all my collaborators!<br><br>This work would have not been possible<br><br>and I am looking forward to future work together

---

Thank you!

<img src='thankyou/octocat.png' style='width:200px'><br><br>

<a href='https://danielhaehn.com/slides/MIT'>danielhaehn.com/slides/MIT</a><br><br>
<small><a href='http://ratemytalk.com/9HV29M'>RateMyTalk.com/9HV29M</a></small>

Note: Again, all my stuff is on github<br><br>the slides are on my website<br><br>and please rate my talk :)




