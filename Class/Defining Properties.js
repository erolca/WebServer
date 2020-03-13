/*
 * There are two basic ways to create objects:
 * Use the Object constructor
 * Use an object literal.
*/

var book1 = {
    name: "Javascript"
}; //from w ww  .  j  a v a  2s  . co m

var book2 = new Object();
book2.name = "Javascript";

book1.website = "java2s.com";
book2.website = "java2s.com";

book1.name = "CSS";
book2.name = "HTML";

console.log(book1.name);
console.log(book1.website);
console.log(book2.name);
console.log(book2.website);

/*
 Note
Both book1 and book2 are objects with a name property. Then, both objects are assigned a website property.
We can add the properties after the definition of the object or later.
Objects are open for modification unless you specify otherwise.
When a property is first added to an object, JavaScript uses an internal method called [[Put]] on the object.
The [[Put]] method creates a storage in the object to store the property.
[[Put]] creates of a property on the object.
The property is called an own property.
The new added property (an own property) indicates that the specific instance of the object has that property.
The property (an own property) is stored directly on the instance.
When a new value is assigned to an existing property, a separate operation called [[Set]] is called.
[[Set]] operation replaces the current value of the property with the new one.
 
 
 */