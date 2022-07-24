var a="5" + 1; //  5 ke sath 1 ko stirng bana padega

console.log(a);

var ans= 1 + "5";
console.log(ans); //stirng me hi vonvert ho jayeda 1

// string ki precedence zayada he integer se

console.log(null * 5);
console.log(undefined * 5);
console.log("5" - 1);//is this case string number ban jayegi
console.log(null * 5);
console.log("ten"*3); // ten string can'nt be mapped to a number but 5 is mapped to a number 5 hence nan
console.log("10" * 3);