let object = { x: 1, y: 2 };
let defaults = { z: 3 };

console.log(Object.assign(object, defaults)); // { x: 1, y: 2, z: 3 }

let newObject = Object.assign({}, defaults, object);
console.log(newObject); // { z: 3, x: 1, y: 2 }