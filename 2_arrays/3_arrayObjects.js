const jsUser = {} // empty object

const mySymbol = Symbol("statue of liberty");

const GamePlayers = {
    name: "john",
    age: 22,
    location: "jaipur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    appliedSymbol : mySymbol,
    correctSymbol: "statue of liberty",
}

console.log(GamePlayers.location); // jaipur
// console.log(GamePlayers[email]); // will give error
console.log(GamePlayers["email"]); // abc@gmail.com

console.log(GamePlayers[mySymbol]); // undefined - interesting for interview

console.log("correctSymbol" in GamePlayers); // true

console.log(GamePlayers["appliedSymbol"]); // Symbol(statue of liberty)

GamePlayers.email = "changingemail@dummy.com";
console.log(GamePlayers.email); // changingemail@dummy.com

// Object.freeze(GamePlayers); // isse object ko freeze kar dega - koi bhi change nahi hoga

GamePlayers.email = "againchange@dummy.com";
console.log(GamePlayers.email); // changingemail@dummy.com 


GamePlayers.greetings = function(){
    console.log("hello world");
}

GamePlayers.greetings(); // hello world

GamePlayers.level = function(){
    console.log(`${this.name} is at level 1`);
}

console.log(GamePlayers.level()); // john is at level 1










/*
singleton 
constructor se banega to singleton hoga...

objects mai hum key value pair mai rakhte hain...


*/