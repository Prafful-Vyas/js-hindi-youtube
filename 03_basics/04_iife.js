// Immediately Invoked Function Expressions (IIFE)
// We don't want global scope pollution.
// We want to immediately invoke the function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // --> Immediately invoke the function right after declaration. Semicolon is important here since we are writing two IIFEs, missing it can cause execution problems.

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // --> Immediately invoke function right after declaration, passing arguments as well.
