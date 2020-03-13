/*
 * Sequential Search is to loop from the start of an array to the end of it.
 */
function seqSearch(arr, data) { /* w w  w  .  j  a v a 2  s.  c  o m*/
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
function printArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
        if (i % 10 == 9) {
            console.log("\n");
        }
    }
    if (i % 10 != 0) {
        console.log("\n");
    }
}
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
printArray(nums);
var num = 14;
console.log();
if (seqSearch(nums, num)) {
    console.log(num + " is in the array.");
} else {
    console.log(num + " is not in the array.");
}
console.log();
printArray(nums);

//var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
num = 14;
console.log();
var position = seqSearch(nums, num);
if (position > -1) {
    console.log(num + " is in the array at position " + position);
} else {
    console.log(num + " is not in the array.");
}
console.log();
printArray(nums);

console.log("");