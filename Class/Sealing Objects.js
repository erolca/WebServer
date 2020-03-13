
/*
 * The second way to create a nonextensible object is to seal the object.
 * A sealed object is nonextensible, and all of its properties are nonconfigurable.
 * We can not add new properties to the object, and we can't remove properties or change their type either.
 * If an object is sealed, you can only read from and write to its properties.
 * We can use the Object.seal() method on an object to seal it.
 * After calling the Object.seal() method, the [[Extensible]] attribute is set to false, and all properties have their [[Configurable]] attribute set to false.
 * We can check to see whether an object is sealed using Object.isSealed() as follows:
*/

var book1 = {
    name: "Javascript"
}; // w w  w.  j  a v a 2  s. c o  m

console.log(Object.isExtensible(book1));      // true 
console.log(Object.isSealed(book1));          // false 

Object.seal(book1);
console.log(Object.isExtensible(book1));      // false 
console.log(Object.isSealed(book1));          // true 

book1.writeLine = function () {
    console.log(this.name);
};

console.log("writeLine" in book1);              // false 

book1.name = "CSS";
console.log(book1.name);                      // "CSS" 

delete book1.name;
console.log("name" in book1);                 // true 
console.log(book1.name);                      // "CSS" 

var descriptor = Object.getOwnPropertyDescriptor(book1, "name");
console.log(descriptor.configurable);           // false 