// Learning about different types of errors

// const a = "hello";
// const b = "buddy";

// console.log(c); // Uncaught ReferenceError: c is not defined
// Basically telling me that I am looking for a box that is essentially non existent.

// Looking at how Stack Traces work 
// Tells me the story of how the error happened (clues for the detective...like a foot trail)

const x = 5;
const y = 20;

function add() {
    return z;
}

function print() {
    add();
}

// Goes into detail on where my errors are (I'm returning a non existent box of data to a function, that's being called by another function. So it returns an error)
print(); 
/* Uncaught ReferenceError: z is not defined
            at add (err.js:16:5)
            at print (err.js:20:5)
            at err.js:23:1
        */

// Syntax errors: breaking the rules

function sup() {
    console.log "sup dudes" // I did not add brackets...which is needed for console.log
}

// Reference Error: Non existent errors

// Type Error: Incorrect type given to function expecting another type, changing values, inappropriate way of manipulating values



/* Tips for resolving errors

    1. Read and understand error message
    2. Google the error.
    3. Use the debugger
    4. Use console.log() to check for errors

*/