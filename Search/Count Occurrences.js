
/*
 * The following code shows how to count the Occurrences of a value.
 */

//Example

function count(arr, data) { /*from  w w w  . jav  a 2 s.c  o m*/
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i;
}
console.log();
var val = 55;
var retVal = count(nums, val);
console.log("Found " + retVal + " occurrences of " + val + "."); 