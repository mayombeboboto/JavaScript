let object = { x: 1, y: 2, z: 3};
let keys = "", sum = 0;

// Object.keys(object) => ["x", "y", "z"]
for(let key of Object.keys(object)) {
    keys += key;
}

for(let value of Object.values(object)) {
    sum += value;
}
console.log(keys, sum); // "xyz" 6

keys = "", sum = 0;

for(let [key, value] of Object.entries(object)) {
    keys += key;
    sum += value;
}

console.log(keys, sum); // "xyz" 6
