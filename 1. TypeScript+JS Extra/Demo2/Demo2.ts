import { Person, myName } from "./Person";
import { printStudent, printStudent_New, Student } from "./Student";

console.log("-------------------------------");

var person1 = new Person(1, "daonq1", "HN");
// person1.id = 1;
// person1.name = "Daonq1";
// person1.address = "HN";

person1.setId(1);

person1.go();

console.log("person1, ID: ", person1.getId());

console.log("-------------------------------");
var student1 = new Student(1, "student1", "HN", "Railway60", 9);
var student2 = new Student(2, "student2", "HN", "Railway60", 9);
var student3 = new Student(3, "student3", "HN", "Railway61", 9);
var student4 = new Student(4, "student4", "HN", "Railway61", 10);

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

printStudent(student1);
printStudent(student2);
printStudent(student3);
console.log("------------Sử dụng hàm Arrow----------");
printStudent_New(student1);

console.log("------------ Sử dụng Array ----------");
var students: Student[];
students = [student1, student2, student3, student4];

students[0].showInfoStudent();

console.log("------------ Sử dụng for ----------");
for (var index = 0; index < students.length; index++) {
  students[index].showInfoStudent();
}

console.log("------------ Sử dụng forEach ----------");

students.forEach((st) => {
  st.showInfoStudent();
});

console.log("------------ Sử dụng forin ----------");
for (const index in students) {
  console.log("Key: ", index);
  students[index].showInfoStudent();
}

console.log("------------ Sử dụng forof ----------");
for (const iterator of students) {
  console.log("iterator", iterator);
}

console.log("------------ Sử dụng map ----------");
var numberArray = [1, 2, 3];
// numberArray_new = [1+5, 2+5, 3+5];
let numberArray_new: number[];

numberArray.forEach((num) => {
  //   numberArray_new.push(num + 5);
});

// map ==> tạo ra 1 mảng mới từ mảng ban đầu
var numberArray_new_1 = numberArray.map((num) => {
  return num + 5;
});

console.log("numberArray_new_1: ", numberArray_new_1);
