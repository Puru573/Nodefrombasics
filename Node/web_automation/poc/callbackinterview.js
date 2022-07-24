// // read 2 files f1 and f2

// const fs=require("fs");
// fs.readFile("f1.txt",cb1);

// function cb1(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res + "");
//         fs.readFile("f2.txt",cb2);
//     }
// }
// function cb2(err,res){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res + "");
//         console.log("data printed");
//     }
// }

// q1 read 3 files f1.txt,f2.txt and f3.txt serially by using callbacks
const fs=require("fs");
// callback hell->pyramid of doom
fs.readFile("f1.txt",function cb1(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res + "");
        fs.readFile("f2.txt",function cb2(err,res){
            if(err){
                console.log(res+"");
            }
            else{
                console.log(res + "");
                fs.readFile("f3.txt",function cb3(err,res){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(res +"");
                        console.log("read all files");
                    }
                })
            }
        })
    }
})

// 1st way to overcome callback heoll is to seperate the callback functions

fs.readFile("f1.txt",cb1);

function cb1(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res +"");
        fs.readFile("f2.txt",cb2);
    }
}
function cb2(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res + "");
        fs.readFile("f3.txt",cb3);
    }
}
function cb3(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res + "");
        console.log("data printed");
    }
}

//q2 read 3 files f1.txt,f2.txt and f3.txt parallely using callbacks

fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb);
fs.readFile("f3.txt",cb);

function cb(err,res){
    if(err){
        console.log(err);
    }
    else[
        console.log(res +"")
    ]
}
