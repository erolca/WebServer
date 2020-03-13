/*
 * The Quicksort algorithm is one of the fastest sorting algorithms for large data sets.
 * The algorithm divides the list into sublists by selecting one element of the list as a pivot.
 * The Quicksort algorithm is best to use on large data sets.
 * Example
 *
 */

// This algorithm then translates into the following JavaScript program:
function qSort(arr) //from w  w w.  j  a v  a  2  s  .co m
{
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}
var a = [];
for (var i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}
console.log(a);
console.log();
console.log(qSort(a));