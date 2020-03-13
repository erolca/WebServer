/*
 * We can add a method to an object in the same way that we would add a property.
 * The following code, the book variable is assigned an object literal with a name property and a method called writeLine.
 */
var book = {
    name: "Javascript",
    writeLine: function () {
        console.log(book.name);
    }
};

book.writeLine(); 