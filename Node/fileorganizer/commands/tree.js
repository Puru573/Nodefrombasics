const fs = require("fs");

const path = require("path");
function treeFn(dirPath) {
    if (dirPath == undefined) {
      console.log("Please Enter a Valid Path");
      return;
    }
    let doesExist = fs.existsSync(dirPath);
    if (doesExist == true) {
      treehelper(dirPath, " ");
    }
  }
  
function treehelper(targetpath,indent){
    let isfile=fs.lstatSync(targetpath).isFile();
    if(isfile==true){
        let filename=path.basename(targetpath);
        console.log(indent +"├── " + filename);
        return;
    }
    let dirname=path.basename(targetpath);
    console.log(indent+"└── " + dirname);

    let children=fs.readdirSync(targetpath);

    for(let i=0;i<children.length;i++){
        let childpath=path.join(targetpath,children[i]);
        treehelper(childpath,indent+"\t");
    }
}
module.exports={
tree:treeFn
}
// let srcPath="C://Users//Puru//Desktop//alldevnotes//Node//fileorganizer";
// treeFn(srcPath);
