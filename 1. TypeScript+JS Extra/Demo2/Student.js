"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.printStudent_New = exports.printStudent = exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, address, classVTI, testScore) {
        var _this = _super.call(this, id, name, address) || this;
        _this.classVTI = classVTI;
        _this.testScore = testScore;
        return _this;
    }
    /**
     * Getter classVTI
     * @return {string}
     */
    Student.prototype.getClassVTI = function () {
        return this.classVTI;
    };
    /**
     * Getter testScore
     * @return {number}
     */
    Student.prototype.getTestScore = function () {
        return this.testScore;
    };
    /**
     * Setter classVTI
     * @param {string} value
     */
    Student.prototype.setClassVTI = function (value) {
        this.classVTI = value;
    };
    /**
     * Setter testScore
     * @param {number} value
     */
    Student.prototype.setTestScore = function (value) {
        this.testScore = value;
    };
    // Viết phương thức hiển thị thông tin của các bạn học viên
    Student.prototype.showInfoStudent = function () {
        console.log("ID: ", _super.prototype.getId.call(this));
        console.log("Name: ", _super.prototype.getName.call(this));
        console.log("Address: ", _super.prototype.getAddress.call(this));
        console.log("Class: ", this.getClassVTI());
        console.log("TestScore: ", this.getTestScore());
    };
    //
    Student.prototype.toString = function () {
        var result = "ID: ".concat(_super.prototype.getId.call(this), " ,Name: ").concat(_super.prototype.getName, " ,Class: ").concat(this.getClassVTI());
        return result;
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
// Viết hàm in thông tin Student
function printStudent(student) {
    console.log("ID: ", student.getId());
    console.log("Name: ", student.getName());
    console.log("Address: ", student.getAddress());
    console.log("Class: ", student.getClassVTI());
    console.log("TestScore: ", student.getTestScore());
}
exports.printStudent = printStudent;
// Khai báo hàm Arrow
var printStudent_New = function (student) {
    console.log("ID: ", student.getId());
    console.log("Name: ", student.getName());
    console.log("Address: ", student.getAddress());
    console.log("Class: ", student.getClassVTI());
    console.log("TestScore: ", student.getTestScore());
};
exports.printStudent_New = printStudent_New;
// Viết hàm tỉnh tổng 2 số: arrow
var sum = function (a, b) {
    console.log("...");
    return a + b;
};
var sum_ = function (a, b) { return a + b; };
var minus_ = function (a, b) { return a - b; };
