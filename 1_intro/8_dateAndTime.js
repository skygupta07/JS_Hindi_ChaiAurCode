let myDate = new Date();


console.log(myDate); // exact date and time dega

console.log(myDate.toString()); // exact date and time dega
console.log(myDate.toDateString()); // exact date and time dega

console.log(typeof myDate); // object

let myCreatedDate = new Date("2023-10-01");
console.log(myCreatedDate); // exact date and time dega => 2023-10-01T00:00:00.000Z
console.log(myCreatedDate.toString()); // exact date and time dega => Sun Oct 01 2023 05:30:00 GMT+0530 (India Standard Time)



let myStamp = Date.now();
console.log(myStamp); 

// bydefault milliseconds mai tha...

console.log(Math.floor(Date.now() / 1000)); // seconds
console.log(Math.floor(Date.now() / 1000 / 60)); // minutes
console.log(Math.floor(Date.now() / 1000 / 60 / 60)); // hours


let newDate = new Date(2023, 9, 1); // 0 to 11

console.log(newDate.getMonth());


newDate.toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
}); 
// October 01, 2023, 12:00 AM IST