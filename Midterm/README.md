# WNM499 Midterm Project - RGB LED 

## Title: Chameleon RGB LED 
### ![Brand](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/rgb-led-logo.png)

## Problem
Fashion-oriented people are sensitive to what they wear because they use fashion as a form of self-expression. Backpack is universal accessory that elevates fashion style, but it is hard to match your backpack with many other different styles of fashion.

## Solution
Omnibag is a smart backpack that can customize with changing colors, patterns, and pre- made designs by its connection to a smartphone or smartwatch. Omnibag is designed with innovative technology for people who want to be more expressive as an universal accessory. One essential feature is that Omnibag reacts depends on your geolocation for functional use. Omnibag is truly an irreplaceable and sustainable product that will replace more than hundreds of bags.

## Diagram
Installing RGB LED to breadboard and show various color changes through smart phone would be prototype for Omnibag.

![Set up diagram](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/diagram2.png)

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

### Code Snippets

#### 

#### Web Socket-Server

Web server application requires to create a web server by using createServer.

```
var http = require('http');
var server = http.createServer(function(request, response) {
var io = require('socket.io')( server );

function handler( request, reply ){
  reply.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Good');
}

io.on('connection', function (socket) {
  socket.on('event:hello', function () {
    console.log('Client says hello');
  });
});
server.listen( 8000, '192.168.2.2');
```
#### Client Socket

The is code will guide you to connect your identified url and there will be verification message once they receive it.

```
var socket = io('http://192.168.2.2:8000');
socket.emit('event:hello');
```
#### Raspberry Pi

This code explains when you control RGB on your web application, it will transmit and sends the command to server. There will be Red, Green, and Blue slider on the web application, so user can choose the color. My goal is everytime user changes the slide, the color will change and corresponds to each slide so the color will be mixed altogether.

```
var blue_gpio = 22;

server.get('/blue/:value', function (req, res) {
    console.log("blue = " + req.params.value);
    var blueValue = req.params.value;
    if( !isNaN( parseInt(blueValue) ) ){
  var Gpio = require('onoff').Gpio, 
  led = new Gpio(blue_gpio, 'out'),      
  ledState = 0;
        res.send('ok');
        led.writeSync( 1 );   
    } else {
    console.log("blue = " + blueValue);
        res.status(400).send('error');
    }

process.on('SIGINT', function(){  //exit properly
  led.unexport();
  process.exit();
});
```

### Ionic

On the web application, I'm going to create rgb slider interface that user can slide Red, Green and Blue section so RGB LED will react to this. If user changes all slide, the color will be mixed and able to create something like purple, pink, and etc. 

![ionic](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/color-slider.png)
![ionic](https://github.com/JesusGuerrero/jin-iot/blob/master/Midterm/color-slider2.png) 












