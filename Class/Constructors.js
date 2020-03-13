
function Book(name) { // www. j  a v  a2s. c om
    this.name = name;
    this.writeLine = function () {
        console.log(this.name);
    };
}

var book1 = new Book("Javascript");
var book2 = new Book("CSS");

console.log(book1.constructor === Book);     // true 
console.log(book2.constructor === Book);     // true 

console.log(book1.name);           // "Javascript" 
console.log(book2.name);           // "CSS" 

book1.writeLine();                   // outputs "Javascript" 
book2.writeLine();                   // outputs "CSS" 

