// Calculator

// Phép cộng
function sum(aInput: number, bInput: number) {
  return aInput + bInput;
}

// Phép trừ
function minus(aInput: number, bInput: number) {
  return aInput - bInput;
}

// Phép nhân
function multiply(aInput: number, bInput: number) {
  return aInput * bInput;
}
console.log("---------------------------------");
let sumab = sum(10, 20);
console.log("sumab: ", sumab);

let minusab = minus(30, 20);
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

let calculate = (a: number, b: number, oparation) => {
  let result = oparation(a, b);
  return (x: number) => result + x;
};

// console.log("Sum HOF: ", calculate(10, 20, sum));
// console.log("Minus HOF: ", calculate(10, 20, minus));
let v_calculate = calculate(10, 50, sum); // v_calculate(x) => 60 + x
let resutl_1 = v_calculate(100); //v_calculate(100)=> 60 +100 =160
console.log("resutl_1: ", resutl_1);
