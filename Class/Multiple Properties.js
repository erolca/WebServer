var book1 = {};
/*  w w  w . j av a 2 s. c o m*/
Object.defineProperties(book1, {
    // data property to store data 
    _name: {
        value: "Javascript",
        enumerable: true,
        configurable: true,
        writable: true
    },
    // accessor property 
    name: {
        get: function () {
            console.log("Reading name");
            return this._name;
        },
        set: function (value) {
            console.log("Setting name to %s", value);
            this._name = value;
        },
        enumerable: true,
        configurable: true
    }
}); 

/*

var book1 = {
    _name : "Javascript"
}; 
Object.defineProperty(book1, "name", {
    get: function () {
        console.log("Reading name");
        return this._name;
    }
});

console.log("name" in book1);                      // true 
console.log(book1.propertyIsEnumerable("name"));   // false 
delete book1.name;
console.log("name" in book1);                      // true 

book1.name = "CSS";
console.log(book1.name);                           // "Javascript" 
*/