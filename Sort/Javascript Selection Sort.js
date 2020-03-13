/*
 * The sorting algorithm works by starting at the beginning of the array and comparing the first element with the remaining elements.
 * After examining all the elements, the smallest element is placed in the first position, and the algorithm moves to the second position.
 * This process continues until the algorithm arrives at the next to last position in the array.
 * Nested loops are used in the selection sort algorithm.
 * The outer loop moves from the first element in the array to the next to last element; the inner loop moves from the second array element to the last element.
 * 
 */
//www.java2s.com

  function MyArray(numElements) { 
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.selectionSort = selectionSort;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function selectionSort() {
    var min, temp;
    for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length-1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
     }
}

var numElements = 10;
var mynums = new MyArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.selectionSort();
console.log();
console.log(mynums.toString());