"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Student_1 = require("./Student");
console.log("-------------------------------");
var person1 = new Person_1.Person(1, "daonq1", "HN");
// person1.id = 1;
// person1.name = "Daonq1";
// person1.address = "HN";
person1.setId(1);
person1.go();
console.log("person1, ID: ", person1.getId());
console.log("-------------------------------");
var student1 = new Student_1.Student(1, "student1", "HN", "Railway60", 9);
var student2 = new Student_1.Student(2, "student2", "HN", "Railway60", 9);
var student3 = new Student_1.Student(3, "student3", "HN", "Railway61", 9);
var student4 = new Student_1.Student(4, "student4", "HN", "Railway61", 10);
console.log("Thông tin học viên Student 1");
console.log("ID: ", student1.getId());
console.log("Name: ", student1.getName());
console.log("Address: ", student1.getAddress());
console.log("Class: ", student1.getClassVTI());
console.log("TestScore: ", student1.getTestScore());
console.log("------------Thông tin học viên Student 2 ----------");
student2.showInfoStudent();
console.log("------------Thông tin học viên Student 3 ----------");
console.log(student3.toString());
console.log("------------Thông tin học viên Student 3  printStudent()----------");
(0, Student_1.printStudent)(student1);
(0, Student_1.printStudent)(student2);
(0, Student_1.printStudent)(student3);
console.log("------------Sử dụng hàm Arrow----------");
(0, Student_1.printStudent_New)(student1);
console.log("------------ Sử dụng Array ----------");
var students;
students = [student1, student2, student3, student4];
students[0].showInfoStudent();
console.log("------------ Sử dụng for ----------");
for (var index = 0; index < students.length; index++) {
    students[index].showInfoStudent();
}
console.log("------------ Sử dụng forEach ----------");
students.forEach(function (st) {
    st.showInfoStudent();
});
console.log("------------ Sử dụng forin ----------");
for (var index_1 in students) {
    console.log("Key: ", index_1);
    students[index_1].showInfoStudent();
}
console.log("------------ Sử dụng forof ----------");
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var iterator = students_1[_i];
    console.log("iterator", iterator);
}
console.log("------------ Sử dụng map ----------");
var numberArray = [1, 2, 3];
// numberArray_new = [1+5, 2+5, 3+5];
var numberArray_new;
numberArray.forEach(function (num) {
    //   numberArray_new.push(num + 5);
});
// map ==> tạo ra 1 mảng mới từ mảng ban đầu
var numberArray_new_1 = numberArray.map(function (num) {
    return num + 5;
});
console.log("numberArray_new_1: ", numberArray_new_1);
