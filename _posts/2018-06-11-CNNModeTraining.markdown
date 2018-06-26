---
layout: single
title:  "CNN model training"
date:   2018-06-12 00:05:00 +0100
categories: Software
author_profile: true
published: true
---
---
Training   
Donkey uses Convolutional Neural Network(CNN) to control the car.
The following graph shows how the model is trained.

![model_loss](/assets/images/model_loss.png)

The number of epochs means how many times the same set of the data is used for training.
The loss means how prediction is different from actual data. Obviously after 10 epochs, it is overfitting.

---

Visualization    
These video clips tell what objects in image activates the neural network in order to decide the steering angle.  It is called saliency mapping.

This is raw video from a Donkey car.
{% include youtube_2.html id=sI8ZMx6i4os%}
This is saliency map video made from the video clip above.
{% include youtube_1.html id=X62V13HihFU%}

This video tells how the CNN sees the world.
The pixels which are in red are the parts that affect most to decide the steering angle output.
These pixels activate the neurons most in the convolutional neural network.
As we can see from this video, the guiding line on the floor is actually not always the one
that activates the network. This means that the Donkey decides the steering angle not by
guiding lane, but other objects and circumstances.
This is not really what is expected from the training, and re-training is required
in order for Donkey to decide the angle mostly from the guiding line.
