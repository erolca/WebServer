var mytask = new String();

function setTask(str) {
    var task = "task a";
    if (str != null) {
        task = str;
    }
    return task;
}
String.prototype.duty = setTask;
console.log("The first task is: " + mytask.duty("Nothing") );
console.log("The next task is: " + mytask.duty());
console.log();