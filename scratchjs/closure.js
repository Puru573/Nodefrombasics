// function outer(){
//     var a =10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var z=outer();
// console.log(z+" ");
// z();

function outer(){
    var a=7;
    function inner(){
        console.log(a);
    }
    a=10;
    return inner;
}
var c=outer();
console.log(c);
c();