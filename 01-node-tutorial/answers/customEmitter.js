const EventEmitter = require("events");  
const emitter = new EventEmitter();  

const customEventHandler = (msg) => {
  console.log("Received event:", msg);  
};

emitter.on("customEvent", customEventHandler);

setInterval(() => {  
    emitter.emit("customEvent", "My event!");
}, 2000); 