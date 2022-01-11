const osiosi = require('os');

// info about current user
const user = osiosi.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${osiosi.uptime} seconds`);

const currentOS = {
  name: osiosi.type(),
  release: osiosi.release(),
  totalMem: osiosi.totalmem(),
  freeMem: osiosi.freemem()
};

console.log(currentOS);
