/*
it is very much common and frequent that you will get strings or objects in the array...

*/

// for of se hi kaam chala lena chahiye....

const arr = [1,4, 6, 2, 0]

for (const num of arr){
    console.log(num);
}

const greetings = "hello world"

for (const it of greetings){
    console.log(it)
}

// maps

const newMap = new Map()

newMap.set('IN', "INDIA")
newMap.set('USA', "United States Of America")

console.log(newMap)

for (const [key, value] of newMap){
    console.log(key, ':- ' , value);
}

const myObject = {
    'game1' : 'NFS', 
    'game2' : 'spiderman'
}