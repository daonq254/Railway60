"use strict";
exports.__esModule = true;
exports.myName = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.go = function () {
        console.log("I can go!!");
    };
    return Person;
}());
exports.Person = Person;
var myName = "DAONQ";
exports.myName = myName;
// var person1 = new Person();
// person1.id = 1;
// person1.name = "Daonq1";
// person1.address = "HN";
// console.log("person1: ", person1);
