import EventEmitter from "node:events";
function createDomElements() {
  const emitter = new EventEmitter();
  return {
    addEventListener(eventType, listner) {
      emitter.on(eventType, listner);
    },
    removeEventListener(eventType, listner) {
      emitter.off(eventType, listner);
    },
    dispatchEvent(event) {
      event.target = this;
      event.currentTarget = this;
      emitter.emit(event.eventType, event);
    },
  };
}
const button = createDomElements();
button.addEventListner("save", () => {
  console.log("saving...");
  
});
const button = createDomElements();
button.addEventListener("Submit", () => {
    console.log("Data Submitted Successfully");
  });

function handleClick(event) {
  console.log("Button Clicked!");
  console.log("Event:", event);
}
button.addEvent("click", handleclick);
button.dispatchEvent({
  eventType: "save",
});
button.addEventListener("click",(event)) => {
  console.log("button clicked");
  console.log(event.eventType);
  console.log('message:$(event.detail}')              
}
button.dispatchEvent({
  eventType: "Submit",
});
button.dispatchEvent({
  eventType: "click",
  detail: "this is the click dispatch",
});