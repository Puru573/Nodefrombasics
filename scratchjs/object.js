let obj={}; //empty object
console.log(obj);

let person={
    name:"puru",
    age:22,
    phone:000000000,
    gender:"Male",
    height:"178 cm"

};
console.log(`Hey ${person.name}, thank you for sign up `);
console.log(person.gender);
console.log(person["gender"]);

let str ="hello";
console.log(str.length); //dot notation
console.log(str["length"]);  //sq bracket notation

let captainAmerica={
    firstName:"Steve",
    LastName:"Rogers",
    friends:["Bucky","Tony Stark","Bruce Banner"],
    age:102,
    address:{
        state:"Manhattan",
        city:"New York",
        country:"USA"
    },
    sayHi:function(){
        console.log(`Hello my name is ${this.firstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
captainAmerica.sayHi();//method accessing

//for loop
//in keyword in JS is used to get kes from the obj
for(let haathi in captainAmerica){
    //key
    console.log(`${haathi}:${captainAmerica[haathi]}`);
    //haathi jo var he uske andar meri key ki val pari he
    console.log(captainAmerica[haathi]);
    //var ke andar bind val chahiye

    console.log(captainAmerica.address.city);
    //nested obj access

    //deleting the key of an object
    delete captainAmerica.LastName;
    console.log(captainAmerica.LastName);
}
