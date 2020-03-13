/*
 * There are two different types of properties: data properties and accessor properties.
 * Data properties contain a value, like the name property from book1.
 * The default behavior of the [[Put]] method is to create a data property.
 * Accessor properties don't contain a value.
 * Accessor property it defines a function to call when the property is read, and a function to call when the property is written to.
 * Accessor properties only require either a getter or a setter.
 * There is a special syntax to define an accessor property using an object literal:
 */


var book1 = {
    _name: "Javascript",
    /*  w w w .  j  av a2s .c  om*/
    get name() {
        console.log("Reading name");
        return this._name;
    },
    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};

console.log(book1.name);

book1.name = "CSS";
console.log(book1.name); 

// Reading name
// Javascript
// Setting name to CSS
// Reading name
// CSS