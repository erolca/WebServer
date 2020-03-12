//Example
// www.java2s.com

function Point(x, y) { 
    this.x = x;
    this.y = y;
}

function displayPoint(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i].x + ", " + arr[i].y);
    }
}
var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);
var points = [p1, p2, p3, p4];
for (var i = 0; i < points.length; ++i) {
    console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
}

var p5 = new Point(12, -3);
points.push(p5);
console.log("After push: ");
displayPoint(points);
points.shift();
console.log("After shift: ");
displayPoint(points); 



//Arrays in Objects
//Aþaðýdaki örnekte, deðerleri saklayan bir nesne oluþturuyoruz.
//from  www.java2s.com
function MyData() { 
    this.dataStore = [];        //property 
    this.add = add;             //function
    this.average = average;     //function
}

function add(temp) {
    this.dataStore.push(temp);
}
function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}


var myData = new MyData();
myData.add(2);
myData.add(5);
myData.add(1);
myData.add(5);
myData.add(5);
myData.add(0);
myData.add(2);
myData.add(9);
console.log(myData.average()); 