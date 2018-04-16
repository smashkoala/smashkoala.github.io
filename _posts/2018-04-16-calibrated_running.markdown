---
layout: single
title:  "Calibrated and running with bluetooth joystick"
date:   2018-04-15 00:05:00 +0100
categories: Hardware
author_profile: true
published: true
---

By following the instruction of the calibration, I have calibrated my Bad Bug
Donkey car. THROTTLE_FORWARD_PWM = 390, THROTTLE_STOPPED_PWM = 370,
THROTTLE_REVERSE_PWM = 350. These are the final throttle PWM values.

For steering, final steering PWM values are STEERING_LEFT_PWM = 430, STEERING_RIGHT_PWM = 295. The following table shows the diameter of the steering for each angle step when these PWM values are used.

| Step | -1.0 | -0.9 | -0.8 | -0.7 | -0.6 | -0.5 |  0.5 |  0.6 |  0.7 |  0.8 |  0.9 |  1.0 |
|----||:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|diameter (cm)| 141  | 145  | 161  | 185  | 224  | 280  | 248  | 216  | 192  | 167  | 151  | 136  |

After the calibration, I started running the car with Sony P3 Playstation joystick.
The throttle can be well controlled by the joystick, since the joystick has much
smaller granularity of the steering step than the web controller.
The throttle control in low speed was not an issue, although initially I was concerned about it since my Bad Bug has a sensor-less brushless motor. It worked perfectly fine thanks
to reduced number of battery packs, and the setting of forward PWM value = 390. The PWM value was set as small as possible. This is the PWM value when the car starts moving not when it is in the maximum throttle. In future, I can increase the speed of the car by increasing this PWM value.
The next is the most anticipated step, training the Convolutional Neural Network (CNN) model.
