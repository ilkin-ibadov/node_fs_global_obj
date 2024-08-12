// Global Objects in Node.js

// __filename: The filename of the code being executed
console.log("__filename:", __filename);

// __dirname: The directory name of the code being executed
console.log("__dirname:", __dirname);

// console: Provides a simple debugging console
console.log("Hello, world!");

// process: Provides information and control over the current Node.js process
console.log("Node.js version:", process.version);

// Global Functions
// setTimeout: Executes a function after a specified delay
const timeoutId = setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

// clearTimeout: Clears a timeout set by setTimeout
clearTimeout(timeoutId);

// setInterval: Repeatedly executes a function at specified intervals
const intervalId = setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);

// clearInterval: Clears an interval set by setInterval
setTimeout(() => clearInterval(intervalId), 5000);
