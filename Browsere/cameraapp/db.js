//connect to database
let db;
let openRequest=indexDB.open('nyDatabase');
openRequest.addEventListener('success',()=>{
    console.log('db connected');
    db=openRequest.result;
})
// this code gives us the access to openrequest

openRequest.addEventListener('success',()=>{
    console.log('db connected');
    db=openRequest.result;
})


openRequest.addEventListener('upgradeneeded',()=>{
    console.log('db upgraded OR initialised db');
    db=openRequest.result;

    db.createObjectStore('video',{keyPath:"id"});
    db.createObjectStore("image",{keyPath:"id"});
});

openRequest.addEventListener("error",()=>{
    console.log("db error");
})