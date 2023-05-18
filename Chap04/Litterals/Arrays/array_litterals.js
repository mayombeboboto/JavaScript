let sparseArray = [1,,,,5]; // This array contains 5 elements
let [a, b, c, d, e] = sparseArray;

console.log(sparseArray); // [ 1, <3 empty items>, 5 ]
console.log([a, b, c, d, e]); // [ 1, undefined, undefined, undefined, 5 ]