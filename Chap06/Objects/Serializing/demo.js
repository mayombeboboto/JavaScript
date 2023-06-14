let object = { x: 1, y: { z: [false, null, ""] } };
let json = JSON.stringify(object);
let parsedObj = JSON.parse(json);

console.log(json);
console.log(typeof parsedObj);
