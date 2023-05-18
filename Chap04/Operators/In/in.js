let point = { x:1, y: 1};
"x" in point; // true
"z" in point; // false
"toString" in point; // true, this is inherited

let data = [7, 8, 9];
"0" in data; // true
1 in data; // true
3 in data; // false