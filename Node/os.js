const os=require("os");//return the underlying achitechture
// let mySystemArch=os.arch();
// console.log(mySystemArch);

//return info of the cpu

// let mycpuinfo=os.cpus();
// console.log(mycpuinfo);

//returns the host name of the os as a string
// let hostName=os.hostname();
// console.log(hostName);
// // Returns an object containing network interfaces that have been assigned a network address.
// let networkInfo=os.networkInterfaces();
// console.log(networkInfo);

// Returns the operating system as a string.
console.log(os.release());

// Returns a string identifying the operating system platform for which the Node.js binary was compiled
console.log(os.platform());

// Returns the operating system name
console.log(os.type());

// Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

// Returns the system uptime in number of seconds.
let uptiimeInHours =os.uptime() /3600;
console.log(uptiimeInHours);

// Returns information about the currently effective user.
console.log(os.userInfo);



