function Book(name) { //from w  ww. j a  va  2s .com
    this.name = name;
}

Book.prototype = {
    constructor: Book,

    writeLine: function () {
        console.log(this.name);
    },

    toString: function () {
        return "[Book " + this.name + "]";
    }
};

var book1 = new Book("Javascript");
var book2 = new Book("CSS");

console.log(book1 instanceof Book);         // true 
console.log(book1.constructor === Book);    // true 
console.log(book1.constructor === Object);    // false 

console.log(book2 instanceof Book);         // true 
console.log(book2.constructor === Book);    // true 
console.log(book2.constructor === Object);    // false 