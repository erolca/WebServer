/*
 * Property attributes
 * Javascript can interact with property attributes directly.
 * We can add new attributes to support additional functionality.
 * We can create properties that behave the same way as built-in JavaScript prop erties.
 * Common Attributes
 * There are two property attributes shared between data and accessor properties.
 * One is [[Enumerable]], which determines whether it can be iterated.
 * Another is [[Configurable]], which determines whether the property can be changed.
 * We can remove a configurable property using delete and can change its attributes at any time.
 * By default, all properties we declare on an object are both enumerable and configurable.
 * We can use the method defineProperty to change the [[Enumerable]] and [[Configurable]].
 * To make an object property nonenumerable and nonconfigurable:
 */
var book1 = {
    name: "Javascript"
}; /*from w  w  w .j ava  2s. c  o m*/

Object.defineProperty(book1, "name", {
    enumerable: false
});

console.log("name" in book1);                      // true 
console.log(book1.propertyIsEnumerable("name"));   // false 

var properties = Object.keys(book1);
console.log(properties.length);                      // 0 

Object.defineProperty(book1, "name", {
    configurable: false
});

// try to delete the Property 
delete book1.name;
console.log("name" in book1);                      // true 
console.log(book1.name);                           // "Javascript" 

//Object.defineProperty(book1, "name", {           // error!!! 
//    configurable : true 
//}); 