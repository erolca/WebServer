/*
 * Yýðýn, listenin yalnýzca bir ucundan eriþilebilen, üst olarak adlandýrýlan öðelerin listesidir.
 * Yýðýn son giren ilk çýkar (LIFO) veri yapýsý olarak bilinir.
 * Bir yýðýn oluþturmak için, uygulamamýzda bir dizi kullanacaðýz.
 *  
 * */

function Stack() { /*from  w  ww .  ja v a  2 s  .  c o  m*/
    this.dataStore   = [];
    this.top         = 0;
    this.push        = push;         //function
    this.pop        = pop;           //function
    this.peek       = peek;          //function
    this.length     = length;        //function
    this.clear      = clear;         //function
}
//push() can push a new element 
//onto a stack. Here is the code: 
function push(element) {
    this.dataStore[this.top++] = element;
}
//The pop() function does the reverse of the push() function.
//It returns the element in the top position of the stack and then decrements the top variable: 
function pop() {
    return this.dataStore[--this.top];
}
//The peek() function returns the top element of the stack by accessing the element at 
//the top-1 position of the array: 
function peek() {
    return this.dataStore[this.top - 1];
}
//The length() function returns this value by returning the value of top: 
function length() {
    return this.top;
}
//we can clear a stack by simply setting the top variable back to 0: 
function clear() {
    this.top = 0;
}

var s = new Stack();
s.push("D");
s.push("R");
s.push("B");
console.log("length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("C");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("B");
console.log(s.peek());
console.log("");



/*
var Stack = function () {
    this.storage = {};//from  ww w  .  ja va2 s  .co  m
    this.stackSize = 0;
};


Stack.prototype.push = function (value) {
    this.storage[this.stackSize++] = value;
};

Stack.prototype.pop = function () {
    if (this.stackSize) {
        var temp = this.storage[this.stackSize - 1];
        return (delete this.storage[this.stackSize--]) && temp;
    }
};

Stack.prototype.size = function () {
    return this.stackSize;
};*/