//Built-in nodejs modules

// OS module
const os = require('os');

//current user
console.log(os.userInfo());

//system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

currentOS.totalMem =
  (Number(currentOS.totalMem) / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
currentOS.freeMem =
  (Number(currentOS.freeMem) / (1024 * 1024 * 1024)).toFixed(2) + 'GB';

console.log(currentOS);
