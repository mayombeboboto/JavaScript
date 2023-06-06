let object1 = {};
object1.x = 1;

let object2 = Object.create(object1); // Inherits property `x`
object2.y = 2;

let object3 = Object.create(object2); // Inherits both `x` and `y`
object3.z = 3;

console.log(object3.valueOf()); // { z: 3 }
console.log(object3.x, object3.y, object3.z); // 1 2 3

let unitcircle = { r: 1 };         // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1;                  // c defines two properties of its own
c.r = 2;                           // c overrides its inherited property
unitcircle.r                       // => 1: the prototype is not affected
