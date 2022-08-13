var arr=[];
var obj={};
function abc(){
    console.log("puru");
}
console.log(arr.__proto__);//prototype hoga obj naam ka
console.log(Array.prototype);//same prototype he obj naam a

console.log(arr.__proto__.__proto__);//it defines that arr is obj coz all the properties which we can find is of obj(obj ka prototype access kr rhe he)
console.log(obj.__proto__);//prototype jo obj naam ka tha uska prototye kya to sara obj kii properties and methds aa gye

console.log(abc.__proto__);
console.log(abc.__proto__.__proto__); //obj ki properties hi show kr rha he so function is also equal to an obj.
console.log(obj.__proto__.__proto__);//obj is god and there is no one who can dominant than god

let user={
    name:"puru",
    sayHi:function(){
        console.log(this.name);
    }
};
let admin={
    role:"admin",
    age:30,
};
admin.name;

Array.prototype.calculate=34;

let ar=[];
ar.__proto__;
admin.__proto__=user;
admin.name;
admin.sayHi();

admin.name="abhi";
admin.name;
admin.sayHi();
user.name;