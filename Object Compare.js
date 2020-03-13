/*
 * Object Compare
 * The following code is performing Equality and Identity Tests on Objects.
*/

var myData1 = {
    name: "JavaScript",
    weather: "Good",
};// w  w w .ja va2  s  .  c  o  m
var myData2 = {
    name: "JavaScript",
    weather: "Good",
};

var myData3 = myData2;

var test1 = myData1 == myData2;
var test2 = myData2 == myData3;
var test3 = myData1 === myData2;
var test4 = myData2 === myData3;
console.log("Test 1: " + test1 + " Test 2: " + test2);
console.log("Test 3: " + test3 + " Test 4: " + test4);


