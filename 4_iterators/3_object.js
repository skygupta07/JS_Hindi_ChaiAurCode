const myObject = {
    js : 'javascript',
    cpp : 'c++', 
    rb : 'ruby', 
    swift: "swift by apple"
}


for (const key in myObject){
    console.log(key);
}


for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming = ['js', "rb", "py", 'java', "cpp"]

// arrays ki bhi key hoti h actually arrays ki hi keys se inspire huye to logo ne
// socha ki object type banate h jisme user defined key hogi and then corresponding 
// value match hogi....

for (const key in programming){
    console.log(key) // index print karega...
}

for (const key in programming){
    console.log(programming[key])
}

// maps are not iteratable.. aap aise nahi kar paoge ki map pe for loop laga diya...
// ya phir for in loop laga diya...

const newMap = new Map()

newMap.set('IN', "INDIA")
newMap.set('USA', "United States Of America")

// console.log(newMap)

for (const key in newMap){ // this will print nothing as the map is not iteratable
    console.log(newMap)
}


// for each loop

const animals = ["dog", "cat", 'cow', "goat"]


//  callback function kaa koi naam nahi hota..

// function to function h .. aap chahe to arrow function bhi use kar sakte h..

function printMe(item){
    console.log(item)
}


animals.forEach(printMe)

animals.forEach( (item) => {
    console.log(item);
} )



animals.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


const myHouse = [
    {
        room1: "me",
        room2: "parents"
    },
    {
        table: "chair",
        lights: "camera"
    }, 
    {
        lights: "darkness"
    }
]



myHouse.forEach( (item) => {
    console.log(item.lights)
} )


const myValues = myHouse.forEach((item) => {
    console.log(item)
    return item
})


// for each koi bhi value return nahi kar rha h...

console.log(myValues) // undefined



const myNums = [1,2,3,4,5,6,7,8,9,10]


// filter bhi apne andar callback hi leta h...

const newNums = myNums.filter( (num) => num > 5 )

console.log(newNums)


// agar aapne filter mai callback likhte waqt curly braces laga diya {i.e. scope open kar diya to) to 
// ab aapko return statement likhna hi padega...

const specialNums = myNums.filter( (num) => {
    return num >= 7
} )


console.log(specialNums)

// applying condition and then printing using 
// forEach loop

myNums.forEach( (num) => {
    if (num > 4) newNums.push(num)
})


const books = [
    {title: 'book1', genre : 'fiction', publish: 1987, edition: 12},
    {title: 'book2', genre : 'history', publish: 1988, edition: 10},
    {title: 'book3', genre : 'science', publish: 1923, edition: 17},
    {title: 'book4', genre : 'non-fiction', publish: 2008, edition: 4},
    {title: 'book5', genre : 'history', publish: 2018, edition: 15},
    
]


let userBooks = books.filter( (bk) => {
    return bk.genre == 'history'
} )

console.log(userBooks)


let newHistoryBooks = books.filter((bk) => {
    return bk.publish > 2000 && bk.genre == "history"
})

console.log(newHistoryBooks)