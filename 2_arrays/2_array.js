const marvelHeroes = ["thor", "ironman", "hulk", "spiderman"];
const dcHeroes = ["batman", "superman", "wonderwoman", "aquaman"];

marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes); // [ 'thor', 'ironman', 'hulk', 'spiderman', [ 'batman', 'superman', 'wonderwoman', 'aquaman' ] ]

// console.log(marvelHeroes[4]); // [ 'batman', 'superman', 'wonderwoman', 'aquaman' ]
// console.log(marvelHeroes[4][2]); // wonderwoman


marvelHeroes.concat(dcHeroes);

// console.log(marvelHeroes); // [ 'thor', 'ironman', 'hulk', 'spiderman', [ 'batman', 'superman', 'wonderwoman', 'aquaman' ] ]

// push ya concat dono se array mai add hoga...
// concat returns a new array
// push returns the length of the new array


const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); 


// kaach ka glass spread 

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes); // [ 'thor', 'ironman', 'hulk', 'spiderman', 'batman', 'superman', 'wonderwoman', 'aquaman' ]

const anotherArray = [1,2,3,[4,5,6], [[7,8,9], [10,11,12]]];

console.log(anotherArray); // [ 1, 2, 3, [ 4, 5, 6 ], [ [ 7, 8, 9 ], [ 10, 11, 12 ] ] ]

const flatArray = anotherArray.flat(2); // 2 levels tak flat karega - Infinity bhi de sakte ho

console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]


console.log(Array.isArray("akash")) // false
console.log(Array.isArray([1,2,3])) // true

console.log(Array.from("akash")) // [ 'a', 'k', 'a', 's', 'h' ]

// ye bana nahi paa raha array isliye empty array de raha hai

console.log(Array.from({name: "akash", age: 23})); // [ 'name', 'age' ] - interesting for interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(score1, score2, score3); // 100 200 300

// from isArray of    method important...