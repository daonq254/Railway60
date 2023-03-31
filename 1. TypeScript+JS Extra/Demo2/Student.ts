import { Person } from "./Person";

class Student extends Person {
  //  Khai báo các thuộc tính
  private classVTI: string;
  private testScore: number;

  constructor(id: number, name: string, address: string, classVTI: string, testScore: number) {
    super(id, name, address);
    this.classVTI = classVTI;
    this.testScore = testScore;
  }

  /**
   * Getter classVTI
   * @return {string}
   */
  public getClassVTI(): string {
    return this.classVTI;
  }

  /**
   * Getter testScore
   * @return {number}
   */
  public getTestScore(): number {
    return this.testScore;
  }

  /**
   * Setter classVTI
   * @param {string} value
   */
  public setClassVTI(value: string) {
    this.classVTI = value;
  }

  /**
   * Setter testScore
   * @param {number} value
   */
  public setTestScore(value: number) {
    this.testScore = value;
  }

  // Viết phương thức hiển thị thông tin của các bạn học viên
  public showInfoStudent(): void {
    console.log("ID: ", super.getId());
    console.log("Name: ", super.getName());
    console.log("Address: ", super.getAddress());
    console.log("Class: ", this.getClassVTI());
    console.log("TestScore: ", this.getTestScore());
  }

  //
  public toString(): String {
    var result = `ID: ${super.getId()} ,Name: ${super.getName} ,Class: ${this.getClassVTI()}`;
    return result;
  }
}

// Viết hàm in thông tin Student
function printStudent(student: Student): void {
  console.log("ID: ", student.getId());
  console.log("Name: ", student.getName());
  console.log("Address: ", student.getAddress());
  console.log("Class: ", student.getClassVTI());
  console.log("TestScore: ", student.getTestScore());
}

// Khai báo hàm Arrow

let printStudent_New = (student: Student) => {
  console.log("ID: ", student.getId());
  console.log("Name: ", student.getName());
  console.log("Address: ", student.getAddress());
  console.log("Class: ", student.getClassVTI());
  console.log("TestScore: ", student.getTestScore());
};

// Viết hàm tỉnh tổng 2 số: arrow
let sum = (a: number, b: number) => {
  console.log("...");

  return a + b;
};

let sum_ = (a: number, b: number) => a + b;
let minus_ = (a: number, b: number) => a - b;

export { Student, printStudent, printStudent_New };
