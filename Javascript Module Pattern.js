
/*The module pattern is an object-creation pattern designed to create singleton objects with private data.

Its format is shown as follows.

*/


var yourObject = (function () {
    // private data variables 
    return { //w w  w .  j  av  a  2  s. c  o  m
        // public methods and properties 
    };
}());

/*For example: */

var book = (function () {
    var version = 1;
    return {
        name: "Javascript",
        getVersion: function () {
            return version;
        },
        publishNewVersion: function () {
            version++;
        }
    };
}());

console.log(book.name);
console.log(book.getVersion());  //Javascript

book.version = 2;
console.log(book.getVersion());  //1

book.publishNewVersion();
console.log(book.getVersion());  //2