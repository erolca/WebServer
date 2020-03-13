///1
var myData = {
    name: "JavaScript",
    weather: "Good",
    printMessages: function () {//from w w  w .ja  v  a2 s.  co  m
        console.log("Hello " + this.name + ". ");
        console.log(this.name + " is " + this.weather + ".");
    }
};

////2
var tutorial = {//from w w  w .ja  v  a2 s.  co  m
    "name": "JavaScript",
    "pageSize": 9,
    1: true
}; 

///3
function displayInfo(args) { /*  w  w w. j  a v a 2  s . c  o  m*/
    if (typeof args.name == "string") {
        console.log("Name: " + args.name);
    }
    if (typeof args.pageSize == "number") {
        console.log("PageSize: " + args.age);
    }
}
displayInfo({
    name: "JavaScript",
    pageSize: 9
}); 




myData.printMessages();

for (var prop in myData) {
    console.log("Name: " + prop + " Value: " + myData[prop]);
}


console.log(tutorial.name); //JavaScript
console.log(tutorial.pageSize); //9
console.log(tutorial["1"]); //

displayInfo({
    name: "HTML"
});