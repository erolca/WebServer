
////functions
function showScope() {
    return scope;
}


//Javascript Objects and Object-Oriented Programming
function Account(amount) { //from w  w w . java2  s .c  om
    this.balance = amount;    // property 
    this.deposit = deposit;   // function 
    this.withdraw = withdraw; // function 
    this.toString = toString; // function 
}
function deposit(amount) {
    this.balance += amount;
}
function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        print("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
} 

var book = {
    name: "Javascript",
    writeLine: function () {
        console.log(book.name);
    }
}; 

function writeLineForAll() { /*  w  ww  . j  a  v  a 2s.  com*/
    console.log(this.name);
}

var book1 = {
    name: "Javascript",
    writeLine: writeLineForAll
};

var book2 = {
    name: "CSS",
    writeLine: writeLineForAll
}; 


////functions
var scope = "global";
console.log(scope);       // displays "global" 
console.log(showScope()); // displays "global" 

sc = showScope;
console.log(sc());


//
book.writeLine(); 

var name = "HTML";

book1.writeLine();
book2.writeLine();

writeLineForAll();
//
//Javascript Objects and Object-Oriented Programming
var account = new Account(50);
account.deposit(10);
console.log(account.toString());
account.withdraw(7);
console.log(account.toString());
account.withdraw(8);
console.log(account.toString());