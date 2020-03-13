/*
 * Function declarations are read and available in an execution context before any code is executed.
 * Function expressions aren't complete until the execution reaches that line of code.
 */



console.log(sum(10, 10));

console.log("");
function sum(num1, num2) {
    return num1 + num2;
}


//Example 2
//this is okay
var myFunction;
var condition = true;

if (condition) {
    myFunction = function () {
        console.log("Hi!");
    };
} else {
    myFunction = function () {
        console.log("Yo!");
    };
}
console.log(myFunction.toString());

console.log("");



//Example 3
/*Functions as argument
 * function names in Javascript are variables, so functions can be used as value.
 * We can pass a function as an argument.
 */
/* www.java2s.com*/

function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}
function add10(num) {
    return num + 10;
}

function addString(name) {
    return "Hello, " + name;
}

var result1 = callSomeFunction(add10, 10);
console.log(result1);   //20



var result2 = callSomeFunction(addString, "XML");
console.log(result2);  

console.log("");



//Example 3
/*
 * 
 * Functions as return values
 * function names in Javascript are variables, so functions can be used as value.
 * We can return a function as a value.
 * 
 * Functions as return values
 */
/*from  www.java2s.com*/
function compareField(propertyName) {
    return function (object1, object2)
    {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}
var data = [{ name: "Java", age: 28 },
{ name: "XML", age: 29 }];

data.sort(compareField("name"));
console.log(data[0].name);
console.log(data[1].name);

data.sort(compareField("age"));
console.log(data[0].name);
console.log(data[1].name);



