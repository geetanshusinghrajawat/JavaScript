// Immediately Invoked Function Expression also known as IIFE.
// Global Scope kenpollution ko hatane ke liye  ye use kiya jaata h
// immediate bhi kara jaata h
(function one()
{
    //This is a named IIFE as we have given it a name "One"........
    console.log("DB Connected");
})();
// this is how IIFE works

// semi colon is required to end the IIFE expression

// (this paranthesis is used to write the code)(this paranthesis is used to call the function)

(  () => { //can be used with arrow function
    //this is a simple IIFE as we have given it no name
    console.log("DB is connected");
})();

(  (name) => { //can be used with arrow function
    console.log(`DB connected Two ${name}`);
})("Geetanshu");
