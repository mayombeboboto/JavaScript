let [x, y] = [1, 2];
[x, y] = [x+1, y+1]; // x = 2 and y = 3
[x, y] = [y, x];     // Swap, x = 3 and y = 2

console.log([x, y]); // [3, 2]

let [head, ...rest] = [1, 2, 3, 4]; // head = 1, rest = [2, 3, 4]
console.log(rest);