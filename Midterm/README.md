# WNM499 Midterm Project - RGB LED 

## Title: Chameleon RGB LED 
### ![Brand](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/rgb-led-logo.png)

## Problem
Fashion-oriented people are sensitive to what they wear because they use fashion as a form of self-expression. Backpack is universal accessory that elevates fashion style, but it is hard to match your backpack with many other different styles of fashion.

## Solution
Omnibag is a smart backpack that can customize with changing colors, patterns, and pre- made designs by its connection to a smartphone or smartwatch. Omnibag is designed with innovative technology for people who want to be more expressive as an universal accessory. One essential feature is that Omnibag reacts depends on your geolocation for functional use. Omnibag is truly an irreplaceable and sustainable product that will replace more than hundreds of bags.

## Diagram
Installing RGB LED to breadboard and show various color changes through smart phone would be prototype for Omnibag.

![Set up diagram](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/raspberry_diagram.png)

This diagram shows Omnibag's prototype systematic environment. Users able to use smartphone and send command to LED by picking the color. This information will be transferred to private network and send it to Raspberry pi. Afterwards, Raspberry pi executes commands and controls color changes to RGB LED. 

## Prototype
![Prototype](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/iot_project_rgb_led.png)

This prototype shows a guid to install RGB LED on the breadboard. You will need the following materials to set it up.

1 RGB LED
3 Resistor
4 Wires

The next step is to connect each wire in an appropriate place. Below you will find the steps to connect wires. 

1. (-) shuold be connected to GND
2. Red wire should be connected to GPIO 17
3. Green wire should be connected to GPIO 18
4. Blue wire should be connected to GPIO 27

 ## Development

### Provision

You need to follow the following steps to run Raspberry Pi: 

* Go to [Raspberry Pi](https://www.raspberrypi.org/) website and download [NOOBS](https://www.raspberrypi.org/downloads/noobs/)
* Drag all the files in the extracted [NOOBS](https://www.raspberrypi.org/downloads/noobs/) folder and drop it onto the SD card
* Slot SD card into Raspberry Pi and connect the power
* Your computer needs to connect with wireless internet and allow USB Ethernet to your internet
* Connect Ethernet to your Raspberry Pi and plug USB port to your computer
* Find your IP address by typing "arp -a" on terminal and type ssh pi@xxx.xxx.x.x (IP adress) to connect with Raspberry Pi
* Go to [VNC Viewer](https://www.realvnc.com/download/viewer/) and download VNC viewer
* Activate VNC viewer by typing vncserver on terminal and type password as needed
