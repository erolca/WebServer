var myData = {
    name: "JavaScript",
    weather: "Good",
    printMessages: function ()
    {
        console.log("Hello " + this.name + ". ");
        console.log("Today is " + this.weather + ".");
    }
};

myData.sayHello = function () {
    console.log(this.name);
};

myData.printMessages();
myData.sayHello();




/*Javascript Object Properties*/


var tutorial = {
    name: "JavaScript",
    pageSize: 9
};
console.log(tutorial["name"]); //"JavaScript" 
console.log(tutorial.name); //"JavaScript" 
