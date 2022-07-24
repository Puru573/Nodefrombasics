// function outer(){
//     inner();
//     function inner(){
//         console.log(b);
//     }
// }
// var b=20;
// outer();
// console.log(b);
// var add=function(x){
//     function inner (y){
//         function innermost (z){
//             console.log(x,y,z);
//             return x+y+z;
//         }
//         innermost(6);

//     }
//     inner(5);
// }
// add(4);

// function sumValues(x,y,z){
//     return x+y+z;
// }
// console.log(sumValues([...[1,2,3]]));