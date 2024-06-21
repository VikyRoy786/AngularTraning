const EvetEmitter = require('node:events');

var myevent = new EvetEmitter();
myevent.on("flashRan", ()=>{console.log("Flash Started Running!")});
myevent.emit("flashRan")

myevent.on("flash2", ()=>{console.log("Flash Fell while Running!")})
myevent.emit("flash2")