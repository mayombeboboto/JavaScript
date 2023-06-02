let empty = {};
let point = { x:0, y:0 };
let p2 = { x: point, y: point.y+1 };
let book = {
    "main title": "JavaScript",
    "sub-title": "The Definitive Guide",
    for: "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};

console.log(book);