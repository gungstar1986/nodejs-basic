const EventEmitter = require("events");

class Logger extends EventEmitter {
    log = (message) => this.emit("message", `${message} ${new Date().toISOString().slice(0, 10)}`)
}

const logger = new Logger();
logger.on("message", data => console.log(data));

logger.log("Hello");


