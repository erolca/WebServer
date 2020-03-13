
//To share private data across all instances:

var Book = (function () {
    // everyone shares the same version
    var version = 1;
    /*from   www.java2s.com*/
    function InnerBook(name) {
        this.name = name;
    }
    InnerBook.prototype.getVersion = function () {
        return version;
    };
    InnerBook.prototype.publishNewVersion = function () {
        version++;
    };
    return InnerBook;
}());

var book1 = new Book("Javascript");
var book2 = new Book("CSS");

console.log(book1.name);      // "Javascript" 
console.log(book1.getVersion());  // 1 

console.log(book2.name);      // "CSS" 
console.log(book2.getVersion());  // 1 

book1.publishNewVersion();
console.log(book1.getVersion());   // 2 
console.log(book2.getVersion());   // 2 