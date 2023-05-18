let value1 = 0x1234; // 1001000110100
let value2 = 0x00FF; // 11111111

let value3 = value1 & value2; // 110100
let value4 = value1 | value2; // 1001011111111
let value5 = value1 ^ value2; // 1001011001011

console.log(value3);
console.log(value4);
console.log(value5);