//Array -> is a collection of element

let cars=["BMW","COOPER","PORCHE",1 ,2 ,3,true];
console.log(cars);

//accessing the elements of an array
console.log(cars[0]);
console.log(cars[2]);

//replacing the elements in array
cars[2]="Ferari";
console.log(cars[2]);

//adding elements in an arr
cars[7]="lamborgini";
console.log(cars[7]);
console.log(cars);

//methods of an arr
//1) pop method -> this method removes the element form the last of array
cars.pop();
console.log(cars);

// 2) push method -> it pushes the a new element at the end of an array
cars.push("DUCATI");
console.log(cars);

//3> unshift method:the adds element at the starting of an ayy
cars.unshift("JLR");
console.log(cars);

//4) shift method -> it removes the element from 0th idx of arr
cars.shift();
console.log(cars);

console.log(cars.length);

//2d arr
let arr2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr2d);
console.table(arr2d);
console.log(arr2d[1][2]);
let ans=arr2d[1];//by this we select the row
console.log(ans);
console.log(ans[2]);//by this we select the column
console.log(arr2d.length); // number of rows in 2d arr
console.log(arr2d[1].length); // number of column in 2d arr
//2d arr me val kaise daale
arr2d[1][1]=true;
console.log(arr2d);