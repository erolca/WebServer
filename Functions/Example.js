function myMethod(value) { /*  www .  j av  a2  s .co m*/
    return value;
}

console.log(myMethod("java2s.com!"));
console.log(myMethod("java2s.com!", 2));
console.log(myMethod.length);

myMethod = function () {
    return arguments[0];
};

console.log(myMethod("java2s.com!"));
console.log(myMethod("java2s.com!", 2));
console.log(myMethod.length); 

///////////////////////////////////////////////////////////////////
function sum() { //ww  w  . j  a v a2 s  . co m
    var result = 0,
        i = 0,
        len = arguments.length;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}

console.log(sum(1, 2));
console.log(sum(13, 14, 15, 16));
console.log(sum(5, 0));
console.log(sum()); 