//promises 
//chatur
// function fp(){
//     return new Promise(function (reolve,reject){
//         resolve("h1");
//     });
// }

// let promisifyFunc=fp();
// promisifyFunc.then(function (data){
//     console.log(data);
// });

// promisifyFunc.catch(function(err){
//     console.log(err);
// });

//using async keyword
//asaan bhasa rencho

// async function f(){
//     return "hello";
// }
// let async=f();
// asyncf.then(function(data){
//     console.log(data);
// });

// asyncf.then(alert);

// the keyword await makes js wait untio shat promise settles and returns it's result.
// the function execution "pauses" at the line 44 and resumes when the promise settles, with "result" variable
// await literally suspends the function execution until the promsise settles,and then resumes it with the promise result. that does'nt cost any cpu resources,coz the js engine can do other jobs in the meanttime.
// await waits for promise settlement so, it means it takes care of bothe .hten and .catch

// async function f(){
//     let promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("done!")

//         },5000);
//     });
    
//     let result = await promise; //wait until the promise resolves
//     console.log("hello");
//     alert(result);//"done!"
// }
// f();
// console.log("yolo");

async function showAvatar(){
    let response = await fetch("https://javascript.info/article/promise-chaining/user.json");
    console.log(response);
    let user=await response.json();
    console.log(user);

    //read github user
    let githubResponse=await fetch('https://api.github.com/users/${user.name}');
    let githubUser=await githubResponse.json();

    //show the avatar
    let img = document.createElement("img");
    img.src=githubUser.avatar_url;
    img.className="promise-avatar-example";
    document.body.append(log);

    //wait 3 sec
    await new Promise((resolve,reject)=>setTimeout(resolve,3000));
    img.remove();
    return githubUser;

}
showAvatar();

//try catch finally

try{
    console.log("in try");
}
catch (e){
    console.log(e);
}
finally{
    console.log("i am always executed");
    console.log("ditto :)");
}

// try{
//     throw new Error("gadbad ho gayi");
// }
// catch(e){
//     console.log(e);
// }
// finally{
//     console.log("i am always executed");
//     console.log("ditto :)");
// }