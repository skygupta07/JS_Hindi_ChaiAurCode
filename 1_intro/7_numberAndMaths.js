const score = 100;
console.log(score); // 100

const balance = 900;

const myBankBalance = new Number(balance);

console.log(myBankBalance); // [Number: 900]]

console.log(myBankBalance.toString()); // 900

console.log(typeof myBankBalance); // object

console.log(balance.toFixed(2)); // 900.00 - precision value two decimal places tak dikhayega..


const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000
console.log(hundreds.toLocaleString("en-US")); // 100,000,000


// Maths

console.log(Math);


console.log(Math.abs(-4)); // 4

console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 

console.log(Math.ceil(3.000001)); // 4 - chatth ko matlab upar chu lega...
console.log(Math.floor(3.999999)); // 3


console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.random()); // 0.123456789  - zero aur 1 ke beech mai random number dega
console.log(Math.random() * 10); // 0.123456789 * 10 = 1.23456789

// generate random numbers from 10 to 20

const min = 10;
const max = 20;

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomNumber); // 10 to 20
// 10 to 20 ke beech mai random number dega

