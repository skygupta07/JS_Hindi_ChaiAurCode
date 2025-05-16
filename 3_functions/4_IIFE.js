/*
IIFE - Immediately Invoked Function Expresssions
*/

// actually most of the cases mai global variable ke pollution se problem hoti h...
// so there we use IIFE - yes for immediate execution...

function chai(){
    console.log(`DB connected`);
}


// accha IIFE to mene use kar liya but baar baar mera error aa rha h kyuki...
// ussey ye pta nahi chal paa rha ki rokna kaha par h...??

// isliye last mai semicolon bhi lagega....

/*
jaise normal function pe IIFE lag jaa rha h waise hi aaram se phir arrow 
function pe bhi lag jaega....

*/


(
    () => {
        console.log(`arrow function Goodmorning`)
    }
)();





// for doing that simply wrap the whole function definition inside paranthesis and one more paranthesis 
// outside just for its execution...

// named IIFE
(function tea(){
    console.log(`server running`);
})();



// agar maan lo ki ye IIFI wale mai koi parameter bhi hota to...
// koi dikkat nahi jaise fn mai pass karte they waise hi yaha wo bracket jo de rakhe h usme 
// pass kar dunga...

// ek masala marke chai
// parameter bhejka IIFE declare karna...

((name) => {
    console.log(`goodmorning ${name}`)
})("dean");