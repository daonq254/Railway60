// function multiply(a, b, c) {
//   return a * b * c;
// }

// let resutl = multiply(1, 2, 3);

//  Curring Function
// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
let multiply = (a) => (b) => (c) => a * b * c;

// 1*2*3
let multiply_1 = multiply(1);
let multiply_2 = multiply_1(2);
let multiply_3 = multiply_2(3);

console.log("multiply_3: ", multiply_3);

// 1*2*4
let multiply_4 = multiply_2(4);

// 1*2*9
let multiply_9 = multiply_2(9);

// 2*6*9
