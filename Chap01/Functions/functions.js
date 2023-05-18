const increment_v1 = x => x + 1;
const increment_v2 = function (x) { return x + 1 };

console.log(increment_v1(5)); // 6
console.log(increment_v2(5)); // 6