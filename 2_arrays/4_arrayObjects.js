const tinderUser = new Object(); // singleton object h

console.log(tinderUser) // {}

const tinderUser2 = {} // non singleton object

console.log(tinderUser2) // {}

tinderUser.id = "278"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com", 

    fullName : {
        userFullName:{
            firstName: "Ak", 
            lastName: "G"
        }
    }
}

console.log(regularUser.fullName.userFullName);

const obj1 = {
    1 : "a", 2 : "b", 3 : "c"
}

const obj2 = {4: "d", 5 : "e"}

const obj3 = {obj1, obj2};

console.log(Object.assign({}, obj1, obj2)) // object assign mdn docs
console.log(obj3)


const users = [
    {
        id: 1, 
        email: "mailfromakashguptamail.com", 

    }, 

    {

    },
]


// destructuring array ki bhi hoti h aur object ki bhi hoti h....


const course = {
    courseName: "js in hindi", 
    price: "999", 
    courseInstructor: "akash"
}

// agar courseInstructor bada naam lag rha h to... phir uski jagah...
// thoda chota name diya...

const {courseInstructor : instructor} = course

console.log(instructor) // akash
console.log(course.courseInstructor) // akash


// const navbar = ({company}) => { // for react

// }


// navbar(company = "hitesh")


/*
pehle api ke through XML format mai values aati thi... which itself was quite complex..
ab json format mai aati h...


*/


// both key and value both of them will be kept in format of strings
// ha but numbers aur true false to bina string ke bhi aa sakte h..

const jsonData = {
    "name": "ak",
    "course": "btech", 
    "duration": "4"
};


// kai baar apis json ki bajaye.... array format mai bhi mil sakti h..

[
    {}, 
    {}, 
    {}
]

// object aapko json format mai hi bhejna hota h...
