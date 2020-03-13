
//Enqueue iþlemi, kuyruðun sonuna yeni bir öðe ekler ve dequeue iþlemi, kuyruðun önünden bir öðeyi kaldýrýr.

function Queue() { //from   w w w .ja  va2s  .c  o m
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//The enqueue() function adds an element to the end of a queue: 
function enqueue(element) {
    this.dataStore.push(element);
}
//The dequeue() function removes an element from the front of a queue: 
function dequeue() {
    return this.dataStore.shift();
}
//examine the front and back elements of a queue using these functions: 
function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}
//toString() function to display all the elements in a queue: 
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
//if a queue is empty: 
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

var q = new Queue();
q.enqueue("M");
q.enqueue("C");
q.enqueue("J");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back()); 

//Example 2
//The following code shows how to create a Queue data structure.

/*
var Queue = function () {
    this.storage = {};// ww w.jav a 2 s  .c o m
    this.front = 0;
    this.queueSize = 0;
};

Queue.prototype.enqueue = function (value) {
    this.storage[this.queueSize++] = value;
};
Queue.prototype.dequeue = function () {
    if (this.queueSize - this.front) {
        var temp = this.storage[this.front];
        return (delete this.storage[this.front++]) && temp;
    }
};
Queue.prototype.size = function (value) {
    return this.queueSize - this.front;
};

*/