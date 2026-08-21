console.log("This is the starting point of my code");
process.nextTick(() => {
  console.log("this is process.nextTick operation");
});
setTimeout(() => {
  console.log("This is the first timeout operation");
}, 10000);  
console.log("This is the end point of my code");
setTimeout(() => {
  console.log("This is second timeout operation");
}, 5000);
new Promise((resolve, reject) => {
  let success = false;
  if (success) resolve("Data loaded successfully");
  else reject("Data loading failed");
})
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
  console.log("This is the starting point of my code");
  console.log("This is the end point of my code");
