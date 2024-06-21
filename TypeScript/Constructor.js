var Person = /** @class */ (function () {
    /**
     *
     */
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.fullname = function () {
        return this.fname + " " +
            this.lname;
    };
    Person.prototype.disp = function () {
        console.log("hi " + this.fullname());
    };
    return Person;
}());
var p = new Person("Vikram", "roy");
var q = new Person("Soniya", "roy");
var r = new Person("Laxmi", "roy");
var arr = [p, q, r];
console.log(arr.sort(function (a, b) {
    if (a.fname < b.fname)
        return -1;
    else if (a.fname > b.fname)
        return 1;
    else
        return 0;
}));
console.log(JSON.stringify(arr));
