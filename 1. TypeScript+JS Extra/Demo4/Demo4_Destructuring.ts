// Destructuring
// Đối tượng
let account = {
  id: 1,
  name: "daonq",
  class: "Railway60",
  //   ... 20
};

// let account1_ = {
//   id: 1,
//   name: "daonq",
//   class: "Railway60",
//   gender: "Male",
//   province: "HN",
//   //   ...
// };

let account1_ = {
  ...account, // Spread
  gender: "Male",
  province: "HN",
  //   ...
};

let account2_ = {
  ...account,
  name: "daonq_udpate",
};

// let myId = account.id;
// let myName = account.name;
// let myClass = account.class;
// ...20
// let myId = account.id;
let { id: myId, name: myName, class: myClass } = account;
// let { name: myName } = account;

console.log("myId: ", myId);
console.log("myName: ", myName);
console.log("myClass: ", myClass);

// Mảng
let nameRailway60_ = ["Dương", "Tiến", "Tâm"];
// let element0 = nameRailway60_[0];
// let element1 = nameRailway60_[1];
// let element2 = nameRailway60_[2];

// let [element0, element1, element2] = nameRailway60_;

// element0
// element2
let [element0, , element2] = nameRailway60_;

// element1
// element2
let nameRailway60_Update = [...nameRailway60_, "Thanh", "Hồng", "Nhân"];
let nameRailway60_Update_1 = [...nameRailway60_];
nameRailway60_Update_1[1] = "Tiến_Update";
