let o = { x: 1, y: 2};
let array = Object.entries(o);

for(const [key, value] of array) console.log(key, value);

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent;

const {sin, cos, tan} = Math;
console.log(sin(0), cos(0), tan(0));
