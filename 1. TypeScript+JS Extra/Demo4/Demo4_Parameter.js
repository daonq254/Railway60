// Default Param
function test(nameInput) {
    if (nameInput === void 0) { nameInput = "SomeOne"; }
    console.log("Hello: ".concat(nameInput));
}
test("Ký");
test("Hiếu");
test();
// Rest Param:Số lượng tham số đầu vào không xác định
// function test2(nameInput1: String, nameInput2: String) {
//   console.log(`Hello: ${nameInput1}, ${nameInput2}`);
// }
function test2() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    names.forEach(function (element) {
        console.log(element);
    });
    //   console.log(`Hello: ${names}`);
}
test2("Tâm", "Nhân");
test2("Tâm", "Nhân", "name1", "name2");
// Optional Parameter: Tham số có thể có hoặc không
function test3(id, name, gender) {
    // undefined
    if (gender != undefined) {
        console.log("Id:", id);
        console.log("name:", name);
        console.log("Gender: ", gender);
    }
    else {
        console.log("Id:", id);
        console.log("name:", name);
    }
}
test3(1, "name1", "male");
test3(2, "name2", "female");
test3(3, "name3");
