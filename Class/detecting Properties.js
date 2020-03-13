/*
 * To check whether a property exists in the object use the in operator.
 * The in operator looks for a property with a given name in a specific object and returns true if it finds it.
 * The following code shows how to use in to check for some properties in the book1 object:
 * */

var book1 = {
    name: "Javascript",
    writeLine: function () { /* www  .j  a  v  a 2s. co m*/
        console.log(this.name);
    }
}; 

var book2 = new Object();
book2.name = "Javascript";

book1.website = "java2s.com";
book2.website = "java2s.com";

book1.name = "CSS";
book2.name = "HTML";

console.log("name" in book1); //true
console.log(book1.hasOwnProperty("name")); //true

console.log("toString" in book1); //false
console.log(book1.hasOwnProperty("toString"));  //false