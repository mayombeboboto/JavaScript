let maxWidth;
let preferences = { maxWidth: 0 };

console.log(maxWidth || preferences.maxWidth || 500); // zero is considered as falsy
console.log(maxWidth ?? preferences.maxWidth ?? 500); // Here, if a value is not null or undefined, it's taken.