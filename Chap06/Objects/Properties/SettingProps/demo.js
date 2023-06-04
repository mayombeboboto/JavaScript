let book = {
    author: {
        surname: "Gradie"
    },
    title: "Hello world"
};

let author = book.author;
let name = author.surname;
let title = book["title"];

console.log(author, name, title);