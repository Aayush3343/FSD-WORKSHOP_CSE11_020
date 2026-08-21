import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (teacher) => {
  console.log(`class started by ${teacher}`);
});
myEmitter.on("exit", (teacher) => {
  console.log(`class finsihed by ${teacher}`);
});
myEmitter.on("present", (student) => {
  console.log(`class joined by ${student}`);
});
myEmitter.emit("greet", "Chandrahas");
myEmitter.emit("exit", "Chandrahas");
myEmitter.emit("present", "Aayush");
