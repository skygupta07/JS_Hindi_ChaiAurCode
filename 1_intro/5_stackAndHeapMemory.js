/*
primitive mai stack memory use hoti h...
non primitive mai heap memory use hoti h... => reference => changes reflect hote hai


*/


let myYoutubeName = "Akash Gupta";

let anotherName = myYoutubeName;

console.log(myYoutubeName); // Akash Gupta
console.log(anotherName); // Akash Gupta

myYoutubeName = "Akash Gupta 2.0";

console.log(myYoutubeName); // Akash Gupta 2.0
console.log(anotherName); // Akash Gupta

// yaha par myYoutubeName ki value change hui hai lekin anotherName ki value nahi hui hai
// kyuki primitive data types mai stack memory use hoti hai
// jab bhi aap primitive data type ki value ko change karte ho toh uski copy banti hai


let user = {
    name: "Akash",
    email: "sky@gmail.com",
    upi: "akash@okhdfcbank",
}

let user2 = user;

console.log(user); //{ name: 'Akash', email: 'sky@gmail.com', upi: 'akash@okhdfcbank' }

console.log(user2); // { name: 'Akash', email: 'sky@gmail.com', upi: 'akash@okhdfcbank' } - same hi aaya..

user.name = "john";

// changes kiye to changes dono mai reflect huye..

console.log(user); // { name: 'john', email: 'sky@gmail.com', upi: 'akash@okhdfcbank' }
console.log(user2); // { name: 'john', email: 'sky@gmail.com', upi: 'akash@okhdfcbank' }



