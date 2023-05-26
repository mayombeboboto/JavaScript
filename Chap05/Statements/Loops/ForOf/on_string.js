let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}

console.log(frequency); // { m: 1, i: 4, s: 4, p: 2 }