const userEmail = "abc@dummy.com"

if (userEmail){
    console.log("got user email")
}
else{
    console.log("don't have user email")
}

/*
falsy values 

false
0
-0
bigint 0n
null 
undefined 
NaN
*/

/*
remaining all 

true
"0"
"false"
" "
[] - empty array
 {} - empty object

 function(){} 




*/


if (userEmail.length === 0) {
    console.log("array is empty")
}


const emptyObj = {}


if (Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}


console.log(false == 0) // true
console.log(false == '') // true
console.log(0 == '') // true


// Nullish Coalescing Operator : null (undefined) - error wagera handle karne ke liye... this is not same as ternary operator

let val1;
// val1 = 5 ?? 10

// console.log(val1) // 5

val1 = null ?? 10

console.log(val1) // 10

let val2

val2 = undefined ?? 15

console.log(val2) // 15
 

// ternary operator      condition ? true : false


const price = 10

price < 50 ? console.log("affordable") : console.log("costly")

