const accountId = 345678;
let accountEmail = "dummy@gmail.com";

var accountPassword = "12345678";
accountCity = "Delhi";

accountEmail = "gupta@gmail.com";


accountCity = "Noida"; 

console.table([accountId, accountEmail, accountPassword, accountCity]);


// var pehle use kiya jaata tha...
// initial days par js scope ke basic concept par kaam nahi karti thi...

// simply aap bhul jao ki var bhi kucch hota tha....
// ab aapko sirf let aur const yaad rakhna hai

/*
i.e. prefer not to use var because of issue in block scope and functional scope...
*/


/*
const, var, ya let dikhe to ussey memory mai assign kar do
const - change nahi kar sakte
var - change kar sakte hai
let - change kar sakte hai

// javascipt mai semicolon lagaiye ye nahi aapki marzi hai

if we simply declare a variable without initializing it, it will be undefined

*/