/*The last way to create a nonextensible object is to freeze it.
 * If an object is frozen, you can't add or remove properties, you can't change properties' types, and you can't write to any data properties.
 * A frozen object is a sealed object where data properties are also read-only.
 * Frozen objects can't become unfrozen after being freezed.
 * We can freeze an object by using Object.freeze() and determine if an object is frozen by using Object.isFrozen().
 * For example:*/

var book1 = {
    name: "Javascript"
}; /* w  w w  .ja  v a  2s  .co  m*/

console.log(Object.isExtensible(book1));      // true 
console.log(Object.isSealed(book1));          // false 
console.log(Object.isFrozen(book1));          // false 

Object.freeze(book1);
console.log(Object.isExtensible(book1));      // false 
console.log(Object.isSealed(book1));          // true 
console.log(Object.isFrozen(book1));          // true 

book1.writeLine = function () {
    console.log(this.name);
};

console.log("writeLine" in book1);              // false 

book1.name = "CSS";
console.log(book1.name);                      // "Javascript" 

delete book1.name;
console.log("name" in book1);                 // true 
console.log(book1.name);                      // "Javascript" 

var descriptor = Object.getOwnPropertyDescriptor(book1, "name");
console.log(descriptor.configurable);           // false 
console.log(descriptor.writable);               // false 