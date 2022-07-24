const fs=require("fs");
let inputArr=process.argv.slice(2);
// console.log(inputArr);

let filesArr=[];
let optionArr=[];
//placed files path in filesarr
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
    
}
// console.log("file to be read are"+filesArr);

//check if all the files are present

for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("Item does'nt exist");
        // return;
        process.exit();// it will force the project to out as quick as possible
    }
}

//content read and appending starts
let content="";
for(let i=0;i<filesArr.length;i++){
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+"\r\n";
}
console.log(content);

let contentArr=content.split("\r\n");
// console.table(contentArr);

//check if -s is present or not
let tempArr=[];
let isPresent=optionArr.includes("-s");
if(isPresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    // console.table(contentArr);
    
    //push everything in tempArr except null
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    // console.log("data after removing extra lines\n",tempArr);
  
}
contentArr=tempArr;
let indexofN=optionArr.indexOf("-n");
let indexofB=optionArr.indexOf("-b");

//if -n or -b is not found ,-1 is returned

let finaloption="";
//if both -n and -b are present
if(indexofN !=-1 && indexofB!=-1){
    if(indexofN<indexofB){
        finaloption="-n";
    }
    else{
        finaloption="-b";
    }
}

//either -n is present or -b is present
else{
    if(indexofN!=-1){
        finaloption="-n";
    }
    else if(indexofB!=-1){
        finaloption="-b";
    }
}

//calling of function by evaluation finaloption
if(finaloption=="-n"){
    modifyContentByN();
}
else if(finaloption=="-b"){
    modifyContentByB();
}
function modifyContentByN(){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=(i+1)+")"+contentArr[i];
    }
}
console.log(contentArr);
function modifyContentByB(){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]=count+")"+contentArr[i];
            count++;
        }
    }
}
console.log(contentArr);