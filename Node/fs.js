
//f1->file system module -> it helps us to make data/folders sppend data in them, read data and delete data.
const fs=require("fs");
// const f1=require("./f1.txt");
const abc=require("../scratchjs/temp");
//require method,goes to the file that is needed to be required, executes that file. and if there is something that is exported we get that in variable "add".
// console.log(abc);

//appendfilesync->appends data into a file,if file is not present, it creates the file and than append the data
// let res=fs.appendFileSync("f1.txt","\n you guys are smart");
// console.log(res);

// let data=fs.readFileSync("f1.txt");
// console.log(data +" ");

// let data=fs.readFileSync("f1.txt","utf-8"); //utf-8 reads the file into a human language
// console.log(data);
// console.log(abc);
// let ans=abc.add(2,4);

console.log(abc);