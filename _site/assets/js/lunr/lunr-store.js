var store = [{
        "title": "Self-driving car Donkey!!",
        "excerpt":"Donkey is an open source self driving RC car.With a neural network model based on Keras running on Python, it drives by itself.It uses Raspberry PI for processing trained neural network model. For more information about what they can do and how to build, see Donkey I will build a...","categories": ["jekyll","update"],
        "tags": [],
        "url": "http://localhost:4000/jekyll/update/2018/03/17/firstPage.html",
        "teaser":null},{
        "title": "Procurement summary",
        "excerpt":"I purchased the following parts and kits for my Donkey car.The remaining parts that I need to purchase is the Donkey mount where a Raspberry PI board and other peripheral hardware can sit.Basher 1/16 Bad Bug is not officially supported car in the Donkey community.The biggest concern is that this...","categories": ["Hardware"],
        "tags": [],
        "url": "http://localhost:4000/hardware/2018/03/18/procurement.html",
        "teaser":null},{
        "title": "Top plate mechanics design",
        "excerpt":"For the mechanics to be mounted on the RC car, I downloaded the original 3D designof the top plate and roll cage. They are in a Fusion360 file.I modified the file so that they fit to my Basher HellSeeker RC car. The following is the modified 3D design image.It required...","categories": ["Hardware"],
        "tags": [],
        "url": "http://localhost:4000/hardware/2018/03/21/TopPlate3D.html",
        "teaser":null},{
        "title": "Hardware assembly completed",
        "excerpt":"Today, finally my Donkey car is fully assembled and ready to run. The mechanicalparts are produced by 3D printer much better than I expected. The holes on thetop plate to connect to the body mounting posts are well located.In order to assemble the hardware for Basher Bad Bug, I mainly...","categories": ["Hardware"],
        "tags": [],
        "url": "http://localhost:4000/hardware/2018/04/12/hardware_completed.html",
        "teaser":null},{
        "title": "Calibrated and running with bluetooth joystick",
        "excerpt":"By following the instruction of the calibration, I have calibrated my Bad BugDonkey car. THROTTLE_FORWARD_PWM = 390, THROTTLE_STOPPED_PWM = 370,THROTTLE_REVERSE_PWM = 350. These are the final throttle PWM values. For steering, final steering PWM values are STEERING_LEFT_PWM = 430, STEERING_RIGHT_PWM = 295. The following table shows the diameter of the...","categories": ["Hardware"],
        "tags": [],
        "url": "http://localhost:4000/hardware/2018/04/15/calibrated_running.html",
        "teaser":null},{
        "title": "CNN model of Donkey",
        "excerpt":"Donkey uses Convolutional Neural Network(CNN) to control the car.The input of CNN is the image from the camera on Donkey car. The steering angle and throttle are the outputs of the CNN.The CNN architecture is as below.The input is 120x160 image with RGB channels.It has five Convolution layers. The activation...","categories": ["Software"],
        "tags": [],
        "url": "http://localhost:4000/software/2018/06/11/CNNModel.html",
        "teaser":null},{
        "title": "CNN model training",
        "excerpt":"Training Donkey uses Convolutional Neural Network(CNN) to control the car.The following graph shows how the model is trained. The number of epochs means how many times the same set of the data is used for training.The loss means how prediction is different from actual data. Obviously after 10 epochs, it...","categories": ["Software"],
        "tags": [],
        "url": "http://localhost:4000/software/2018/06/12/CNNModeTraining.html",
        "teaser":null}]
