let book = {
    author: {
        name: "John",
        surname: "Doe"
    }
};

let surname1 = book && book.author && book.author.surname;
let surname2 = book?.author?.surname;
console.log(surname1); // Doe
console.log(surname2); // Doe

delete book.author.name; // Returns true
console.log(book); // { author: { surname: 'Doe' } }