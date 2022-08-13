// // function calc is a hof
// function calculator(operator,a,b){
//     if(operator=="+"){
//         return function add(){
//             return a+b;
//         }
//     }
// }
// console.log("hello");
// let fn=calculator("+",3,4);
// let ans=fn();
// console.log(ans);

// //functional programming
const arr=[2,5,8,6,1,77,78];
// // calc the area of squares
// let areaofsq=function(arr){
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         res.push(arr[i]*arr[i]);
//     }
//     return res;
// }
// console.log(areaofsq(arr));

// // calc the perimeter of squares
// let perimeterofsq=function(arr){
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         res.push(4*arr[i]);
//     }
//     return res;
// }
// console.log(perimeterofsq(arr));

// // calc the diagonal of squares
// let diagonalofsq=function(arr){
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         res.push(Math.sqrt(2)*arr[i]);
//     }
//     return res;
// }
// console.log(diagonalofsq(arr));

// better way

let area=function(a){
    return a*a;
}

let perimeter=function(a){
    return 4*a;
}

let diagonal=function(a){
    return Math.sqrt(2)*a;
}

// let calculate=function(arr,logic){//function ke andar function aa ha he it depicts it's a hof
//     console.log(logic);
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         res.push(logic(arr[i]));
//     }
//     return res;
// };
// console.log(calculate(arr,area));
// console.log(calculate(arr,perimeter));
// console.log(calculate(arr,diagonal));

// map
// write a funciton to calculate area of sq.
// map is use for the iterationo over the loop
// let res=arr.map((a)=>{
//     return a*a;
// });
// console.log(res);

// filter
// write a code to return an arr of even number
// let evenNum=arr.filter((num)=>{
    // return !(num % 2); truthy and falsy value
// });
// console.log(evenNum);

// reduce
// write a code to get the sum of arr
// let somOfArr=arr.reduce((acc,num)=>{
//     console.log("acc:" , acc);
//     console.log("num: ",num);
//     return acc + num;
// },100);
// console.log(somOfArr);

// write a code to calculate largest element in arr
// const ar=[-2,-5,-8,-6];
// let largestelem=ar.reduce((acc,num)=>{
//     acc=Math.max(acc,num);
//     return acc;
// })
// console.log(largestelem);

var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },];

    // write a code to get fullName of all the users
    // output->["mayank Singh","jyoti jauhari","Saket Bharti"]

    // let fullName=function(users){
    //     let res=[];
    //     for(let i=0;i<users.length;i++){
    //         res.push(users[i].firstName +" "+ users[i].lastName);
    //     }
          
    //     return res;
    // }
    // console.log(fullName(users));
    console.log(users.map((obj)=>obj.firstName+" "+obj.lastName));

    // write a code to return the number of people with a particular age
    // o/p -> {55:1,25:1,15:1}
    // function peopleage(robj,cobj){
    //     let age=cobj.age;
    //     console.log(age);
    //     if(robj[age]){ //truthy agar key padi he to varna falsy
    //         robj[age]=robj[age]+1;
    //     }
    //     else{
    //         robj[age]=1;
    //     }
    //     return robj;
    // }
    // var obj=users.reduce(peopleage,{}); //empty obj means robj
    // console.log(obj);

    // write a fn to get firstName of all the users with age less than 30
    // o/p =>{"jyoti Jauhari","Saket Bharti"}

    let firstname=users.reduce((r,obj)=>{
        if(obj.age<30){
            r.push(obj.firstName );
        }
        
        return r;
    },[]);
    console.log(firstname);

    var ans=users.filter((obj)=>obj.age<30);
    var ans=ans.map((obj)=>obj.firstName);
    console.log(ans);

   console.log( users.filter((obj)=>obj.age<30).map((obj)=>obj.firstName));//chaining
//    implementation of our own map
Array.prototype.myMap=function(logic){
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(logic(this[i]));
    }
    return res;
}
var narr=[1,2,3,4,5];
var ans=narr.myMap(perimeter);
console.log(ans);

//with the help of fn expression
var ans=narr.myMap(function(num){
    return num*3;
})
console.log(ans);  
