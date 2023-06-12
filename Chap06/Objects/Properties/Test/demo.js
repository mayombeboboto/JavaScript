let object = { x: 1 };

"x" in object; // true
"y" in object; // false
"toString" in object; // true, inherited property

object.hasOwnProperty("x"); // true
object.hasOwnProperty("y"); // false
object.hasOwnProperty("toString"); // false. toString belongs to its parent.

object.x !== undefined; // true
object.y !== undefined; // false
object.toString !== undefined; // true