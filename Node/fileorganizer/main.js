//entry point of command line
let helpfunc=require("./commands/help");
let orgfunc=require("./commands/organize");
let treefunc=require("./commands/tree");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path = inputArr[1];
switch (command){
    case "tree":
        // treefunc.tree(path);
        // console.log("tree function called and executes successfully on path" + path);
        break;

    case "organize":
        orgfunc.organize(path);
        // console.log("organize funcito called and executed successfull in path" + path);
        break;

    case "help":
        // helpfunc.help();
        // console.log("help function called and executed successfully");
        break;
    default:
        console.log("command not recognized :/");
        break;
}