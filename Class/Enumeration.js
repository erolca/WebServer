var book1 = {
    name: "Javascript"
}; //from www  . j  a v a2  s. c o  m

console.log("name" in book1);
console.log(book1.propertyIsEnumerable("name"));

var properties = Object.keys(book1);

console.log("length" in properties);
console.log(properties.propertyIsEnumerable("length"));