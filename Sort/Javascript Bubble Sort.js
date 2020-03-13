/*
 *   The bubble sort is one of the slowest sorting algorithms, but it is easy to learn.
 *   The elements during the bubble sorting is like bubbles in the water floating up to the surface.
 *   When sorting a set of numbers into ascending order, larger values float to the right of the array and lower values float to the left.
 *   The algorithm moves through the array many times, compares adjacent values, and swaps them if the value to the left is greater than the value to the right.
 * */
// wwww.java2s.com

function MyArray(numElements) { 
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
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
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}

var numElements = 10;
var mynums = new MyArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log();
console.log(mynums.toString());