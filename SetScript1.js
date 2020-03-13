var Set = function () {
    this._storage = {};// w  ww.ja  v  a 2  s.  c o m
};

Set.prototype.generateKey = function (value) {
    var type = typeof value;
    if (type === 'function') {
        value = value.toString();
    }
    else if (type === 'undefined') {
        return 'undefined';
    }
    //NaN
    else if (type === 'number' && !value && value !== 0) {
        return 'NaN';
    }
    else {
        value = JSON.stringify(value);
    }
    return value;
};

Set.prototype.add = function (value) {
    value = this.generateKey(value);
    this._storage[value] = value;
};

Set.prototype.contains = function (value) {
    value = this.generateKey(value);
    return this._storage[value] === value;
};

Set.prototype.remove = function (value) {
    value = this.generateKey(value);
    var temp = this._storage[value];
    return (delete this._storage[value]) && temp;
};

var set = new Set();

set.add(1);
set.add(1);
set.add(2);
set.add(3);

console.log(set.contains(1));