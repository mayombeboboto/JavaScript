let book = {
  topic: "JavaScript",
  edition: 7
};

console.log(book.topic); // "JavaScript"
console.log(book["edition"]); // 7

// Conditional property access.
console.log(book.contents?.ch01?.sect1); // undefined