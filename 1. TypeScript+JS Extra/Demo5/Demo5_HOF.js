// Calculator
// Phép cộng
function sum(aInput, bInput) {
    return aInput + bInput;
}
// Phép trừ
function minus(aInput, bInput) {
    return aInput - bInput;
}
// Phép nhân
function multiply(aInput, bInput) {
    return aInput * bInput;
}
console.log("---------------------------------");
var sumab = sum(10, 20);
console.log("sumab: ", sumab);
var minusab = minus(30, 20);
console.log("minusab: ", minusab);
console.log("-------------HOF--------------------");
// function calculate(a: number, b: number, oparation) {
//   // oparation: nhận các tham só tuỳ ý, có thể nhận cả 1 function
//   //   calculate(10,20,sum)
//   //   calculate(30,20,minus)
//   let result = oparation(a, b);
//   return function (x) {
//     return result + x;
//   };
// }
var calculate = function (a, b, oparation) {
    var result = oparation(a, b);
    return function (x) { return result + x; };
};
// console.log("Sum HOF: ", calculate(10, 20, sum));
// console.log("Minus HOF: ", calculate(10, 20, minus));
var v_calculate = calculate(10, 50, sum);
var resutl_1 = v_calculate(100);
console.log("resutl_1: ", resutl_1);
