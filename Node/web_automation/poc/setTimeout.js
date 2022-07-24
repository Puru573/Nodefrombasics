// {
// function yolo(){
//     var a=10;
//     function cb(err,res){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("hello how are you ?");
//         }
//     }
//     setTimeout(cb,5000);
//     console.log(a);
// }
// yolo();
// let b=100;
// console.log(b);
// }
// const request=require("request");
// let url="https://www.worldometers.info/coronavirus/";
// function yolo(){
//     var a=10;
//     function cb(err,res,body){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("hello how are you?");
//             console.log("statusCode is",res.statusCode);
//         }
//     }
//     //function to be executed(callback fun),time(ms)after which cb to be executed
//     // 1 second =1000 mils second
//     request(url,cb);
//     console.log(a);

// }
// yolo();
// let b=100;
// console.log(b);

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i);

//     },2000*i);
// }

//with the help of var 
// for(var i=1; i<=10; i++){
//     function outer(a){
//         setTimeout(function(){
//             console.log(a);
//         },2000 * a);
//     }
//     outer(i);
// }

//by using fetch

console.log("before");
setTimeout(function () {
  console.log("time over");
}, 5000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response)
  {
    return response.json() // when a promise is returned, it creates a promise and then return it , which is obviously of fuflfilled state 
  })
  .then(function (json) {
    console.log(json)
  });
console.log("after");



