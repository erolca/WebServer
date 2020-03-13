
/**
 * JavaScript functions can accept any number of parameters, and the types of parameters a function takes aren't specified.
 * JavaScript functions don't actually have signatures.
 * Javascript functions don't support overloading.
 * The following code shows what happens when declaring two functions with the same name:
 */

function myMethod(message) {
    console.log(message);
}

function myMethod() {
    console.log("Default message");
}

myMethod("Hello!"); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * In JavaScript, when defining multiple functions with the same name, the one that appears last in your code wins.
 * We can simulate function overloading by using the arguments object.
 */
function writeLine(message) {
    if (arguments.length === 0) {
        message = "Default message";
    }
    console.log(message);
}
writeLine("Hello!");
writeLine("");