let a = { b: null };
console.log(a.b?.c.d); // undefined

a = { b: {} };
console.log(a.b?.c?.d); // undefined