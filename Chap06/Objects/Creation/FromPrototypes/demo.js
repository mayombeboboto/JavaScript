let firstObject = Object.create({ x: 1, y: 2});

console.log(firstObject);                  // {}
console.log(Object.keys(firstObject));     // []
console.log(firstObject.x, firstObject.y); // 1 2


// This will not inherit anything from Object
// Not even toString() method
let secondObject = Object.create(null);

console.log(secondObject); // [Object: null prototype] {}