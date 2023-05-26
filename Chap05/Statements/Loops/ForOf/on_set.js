let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];

for(let word of wordSet) {
    unique.push(word);
}

console.log(unique);