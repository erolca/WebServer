/*
 * Example
 * The revealing module pattern arranges all variables and methods at the top and assigns them to the returned object.
 * We can write the previous example using the revealing module pattern as follows:
 */


var book = (function () {
    var version = 1;
    function getVersion() { /*w  w  w  . jav  a  2  s  . c  om*/
        return version;
    }
    function publishNewVersion() {
        version++;
    }
    return {
        name: "Javascript",
        getVersion: getVersion,
        publishNewVersion: publishNewVersion
    };
}());

console.log(book.name);
console.log(book.getVersion());  //Javascript

book.version = 2;
console.log(book.getVersion());  //1

book.publishNewVersion();
console.log(book.getVersion());  //2