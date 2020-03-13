/*
 * The following code shows how to find the minimum value.
 */
function findMin(arr) { /*www.java2s.com*/
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) { /*www.java2s.com*/
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
} 


var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
console.log();
console.log("The minimum value is: " + minValue); 

for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
var maxValue = findMax(nums);
console.log();
console.log("The maximum value is: " + maxValue); 

console.log("");