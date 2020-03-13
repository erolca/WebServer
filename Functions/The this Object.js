

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

var name = "HTML";

book1.writeLine();
book2.writeLine();

writeLineForAll();    