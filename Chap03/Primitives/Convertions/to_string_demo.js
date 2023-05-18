let n = 17;
console.log("0b" + n.toString(2));  // 0b10001
console.log("0o" + n.toString(8));  // 0o21
console.log("0x" + n.toString(16)); // 0x11

n = 123456.789;
console.log(n.toFixed(0)); // 123457
console.log(n.toFixed(2)); // 123456.79
console.log(n.toFixed(5)); // 123456.78900
console.log(n.toExponential(1)); // 1.2e+5
console.log(n.toExponential(3)); // 1.235e+5
console.log(n.toExponential(7)); // 1.2345679e+5