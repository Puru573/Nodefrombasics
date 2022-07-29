localStorage.setItem("name","Puru");
localStorage.setItem("lastName","Pal");
localStorage.setItem("Stream","CSE");
localStorage.setItem("place","Delhi");
localStorage.hobby="learning";
let data=localStorage.getItem("Stream");
console.log(data);

let l=localStorage.length;
console.log(l);

let d=localStorage.key(2);
console.log(d);

let a =localStorage.removeItem("name");
delete localStorage.name;
