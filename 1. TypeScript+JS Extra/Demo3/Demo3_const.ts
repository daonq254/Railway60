// const: Khai báo hằng số, không thể gán lại giá trị
const Pi = 3.14;
// Pi = 3.1414;

// 1 số trường hợp cần chú ý
// Khai báo const với đối tượng
const account = {
  id: 1,
  name: "daonq1",
  age: 18,
};

account.id = 10;
account.name = "daonq_update";
console.log("account: ", account);

// account = {
//   id: "10",
//   class: "Railway60",
// };

// Khai báo const với mảng
const nameRailway60 = ["Ký", "Hiếu", "Nhân"];
nameRailway60[1] = "Duy";

// nameRailway60 = ["abc"];
