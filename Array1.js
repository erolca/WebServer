//Searching for a Value with indexOf
/*
 * var names = ["A", "C", "R", "D", "J"];
var name = "C";
var position = names.indexOf(name);

if (position >= 0) {
    console.log("Found " + name + " at position " + position);
}
else {
    console.log(name + " not found in array.");
}
*/

//Searching for a Value with lastIndexOf
/*
var names = ["CSS", "Mike", "HTML", "SQL", "CSS", "Mike", "Java","C#"];
var name = "Mike";

var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);

var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos); 
*/


//Convert Array to String
/*
var names = ["CSS", "Mike", "HTML", "SQL", "CSS", "Mike", "Java"];
var namestr = names.join();
console.log(namestr);
namestr = names.toString();
console.log(namestr);
*/

//Append Array with concat()
/*
var firstArray = ["A", "Z", "T", "D", "J"];
var secondArray = ["CSS", "C", "B"];
var thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);
thirdArray = secondArray.concat(firstArray);
console.log(thirdArray);
*/

//Get sub array
/*
var thirdArray = ["M", "C", "T", "A", "D", "E", "J"];
var secondArray = thirdArray.splice(3, 3);
var firstArray = thirdArray;
console.log(secondArray);
console.log(firstArray); 
*/

//Adding Elements to an Array
/*
var nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.push(6);
console.log(nums);

nums = [1, 2, 3, 4, 5];
console.log(nums);
nums[nums.length] = 6;
console.log(nums);
*/


//unshift() method
/*
var nums = [2, 3, 4, 5];
console.log(nums);
var newnum = 1;
nums.unshift(newnum);
console.log(nums);
nums = [3, 4, 5];
nums.unshift(newnum, 1,2);
console.log(nums); */

//Removing Elements from an Array
/*
var nums = [1, 2, 3, 4, 5, 9];
nums.pop();
console.log(nums);

nums = [9, 1, 2, 3, 4, 5];
nums.shift();
console.log(nums);

//Both pop() and shift() return the values they remove.
nums = [9, 1, 2, 3, 4, 5];
nums.shift();
console.log(nums);
*/
//Adding and Removing Elements from the Middle of an Array
/*
var nums = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, newElements);
console.log(nums);

nums = [1, 2, 3, 7, 8, 9];
nums.splice(3, 0, 4, 5, 6);
console.log(nums); 

nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums.splice(3, 4);
console.log(nums);
*/

//Putting Array Elements in Order
/*
var nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);


var names = ["D", "M", "C", "C", "B", "R"];
names.sort();
console.log(names);


function compare(num1, num2) {
    return num1 - num2;
}

nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
console.log(nums);
*/

//forEach()
/*
function square(num) {
    console.log(num, num * num);
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(square);
*/

//every()
/*fromwww.java2s.com*/
/*
function isEven(num) { 
    return num % 2 == 0;
}
var nums = [2, 4, 6, 8, 10];
var even = nums.every(isEven);
if (even) {
    console.log("all numbers are even");
} else {
    console.log("not all numbers are even");
} */
//some()
/*
function isEven(num) { 
    return num % 2 == 0;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var someEven = nums.some(isEven);
if (someEven) {
    console.log("some numbers are even");
}
else {
    console.log("no numbers are even");
}
nums = [1, 3, 5, 7, 9];
someEven = nums.some(isEven);
if (someEven) {
    console.log("some numbers are even");
}
else {
    console.log("no numbers are even");
} 
*/

//reduce()
/*
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums.reduce(add);
console.log(sum);
*/

//reduceRight()
/*
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(sentence);
*/

//map()
/*
function curve(grade) {
    return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades);
*/

//filter()
/*from  www.java2.com*/
/*
function isEven(num) { 
    return num % 2 == 0;
}
function isOdd(num) {
    return num % 2 != 0;
}


var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i + 1;
}
var evens = nums.filter(isEven);
console.log("Even numbers: ");
console.log(evens);
var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds); 
*/


//Example 2
/*from  www.java2s.com*/
/*
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;
    for (var col = 0; col < grades.length; ++col)
    {
        for (var row = 0; row < grades[col].length; ++row)
         {
            total += grades[row][col]; 
         }
        average = total / grades[col].length;
        console.log("Test " + parseInt(col + 1) + " average: " + average.toFixed(2));
        total = 0;
        average = 0.0;
    } 
    */

//Jagged Arrays
var grades = [[99, 97], [96, 92, 81], [81, 84, 89, 89]];
var total = 0;
var average = 0.0;
    for (var row = 0; row < grades.length; ++row)
    {
        for (var col = 0; col < grades[row].length; ++col)
        {
            total += grades[row][col]; 
        }
        average = total / grades[row].length;
        console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
        total = 0;
        average = 0.0;
    }


console.log("");