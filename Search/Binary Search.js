/*
 * When the data are sorted, a more efficient search than the sequential search is the binary search.
 */

function binSearch(arr, data) { //from w  w  w.j  a  va  2 s. c om
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
var val = 14;
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    console.log("Found " + val + " at position " + retVal);
} else {
    console.log(val + " is not in array.");
} 