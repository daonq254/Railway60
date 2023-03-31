"use strict";
exports.__esModule = true;
exports.myName = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name, address) {
        //
        this.id = id;
        this.name = name;
        this.address = address;
    }
    //   Ctrl Ship P
    //   Khai báo hàm Getter Setter
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.prototype.setAddress = function (value) {
        this.address = value;
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
