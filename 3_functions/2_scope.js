let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)

// curly braces hi aapka scope h...

let p = 1
let q = 2
var r = 6

{
    console.log(r) 
    // halaki issey print nahi hona chahiye tha...but chutiya var h to phir ye ..
    // yaha bhi print ho jaega...  
}

let globalVar = 5

{
    globalVar = 68
    console.log(globalVar) // 68
}


console.log(globalVar) // 68

let globalVar2 = 59

{
    let globalVar2 = 45

    console.log(globalVar2) // 45
}

console.log(globalVar2) // 59


// vs code pe node fileName karna aur chrome pe inspect karke scope explore karna 
// dono alag alag cheej h...

// global scope wala local scope mai access kiya jaa sakta h...
// but local scope wala global mai access nahi kar sakte...

function one(){
    const userName = "ag"

    function two(){
        const website = "udemy"
        console.log(userName)
    }
 
    // console.log(website) - will give error

    two()
}


// chote bacche bade logo se aaram se icecream maang sakte h...
// one - father(INDIA) two - SON(PAKISTAN)  ===> yes two can use all the variables of all 
// of his father...
// this is also known as closure property ... i.e. andar wale bahar wale ko access kar paa rahe h..


one()


if (true){
    const userName = "ag"

    if (userName === "ag"){
        const website = "blinkit"

        console.log(userName + website)
    }

    // console.log(website) // bahar h - will give error..
}


// console.log(userName) - will give error


function addOne(num){
    return num + 1
}


addOne(6)

// accha javascript ke andar variables bahut jyada hi powerful h ....
// wo kuch bhi store kar leta h... 
// yaha dekho pure function ko kind of store kar rha h...

const addTwo = function(num){
    return num + 2
}


console.log(addTwo(5))

// function ko declare kara nahi aur access pehle hi karne lage.. to matlab
// hoisting wali problem aayegi...

