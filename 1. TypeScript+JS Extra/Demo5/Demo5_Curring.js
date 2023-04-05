// function multiply(a, b, c) {
//   return a * b * c;
// }
// let resutl = multiply(1, 2, 3);
//  Curring Function
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
// 1*2*3
var multiply_1 = multiply(1);
var multiply_2 = multiply_1(2);
var multiply_3 = multiply_2(3);
console.log("multiply_3: ", multiply_3);
