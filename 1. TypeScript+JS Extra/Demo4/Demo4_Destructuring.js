var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Destructuring
// Đối tượng
var account = {
    id: 1,
    name: "daonq",
    "class": "Railway60"
};
// let account1_ = {
//   id: 1,
//   name: "daonq",
//   class: "Railway60",
//   gender: "Male",
//   province: "HN",
//   //   ...
// };
var account1_ = __assign(__assign({}, account), { gender: "Male", province: "HN" });
var account2_ = __assign(__assign({}, account), { name: "daonq_udpate" });
// let myId = account.id;
// let myName = account.name;
// let myClass = account.class;
// ...20
// let myId = account.id;
var myId = account.id, myName = account.name, myClass = account["class"];
// let { name: myName } = account;
console.log("myId: ", myId);
console.log("myName: ", myName);
console.log("myClass: ", myClass);
// Mảng
var nameRailway60_ = ["Dương", "Tiến", "Tâm"];
// let element0 = nameRailway60_[0];
// let element1 = nameRailway60_[1];
// let element2 = nameRailway60_[2];
// let [element0, element1, element2] = nameRailway60_;
// element0
// element2
var element0 = nameRailway60_[0], element2 = nameRailway60_[2];
// element1
// element2
var nameRailway60_Update = __spreadArray(__spreadArray([], nameRailway60_, true), ["Thanh", "Hồng", "Nhân"], false);
var nameRailway60_Update_1 = __spreadArray([], nameRailway60_, true);
nameRailway60_Update_1[1] = "Tiến_Update";
