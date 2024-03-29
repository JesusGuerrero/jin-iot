var GPIO = require('onoff').Gpio,
    led = new GPIO(27, 'out'),
    button = new GPIO(17, 'in', 'both');

var iv = setInterval(function(){
    led.writeSync(led.readSync() === 0 ? 1 : 0)
}, 500);

setTimeout(function() {
   clearInterval(iv);
   led.writeSync(0);
   led.unexport();
}, 10000);