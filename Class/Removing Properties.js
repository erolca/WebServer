/*
 * Properties can be removed.
 * Setting a property to null doesn't remove the property completely from the object.
 * Such an operation calls [[Set]] with a value of null, which only replaces the value of the property.
 * The delete operator completely removes a property from an object.
 * The delete operator works on a single object property and calls an internal operation named [[Delete]].
 * When the delete operator is successful, it returns true.
 * The following code shows how to use the delete operator.
  */

var book1 = {
    name: "Javascript"
}; //from  w  ww  . j  a  va2 s. co  m

console.log("name" in book1);

delete book1.name;

console.log("name" in book1);
console.log(book1.name);   