let array = [1, 2, 3, 4, 5];
let target = 3;

for(let i = 0; i < array.length; i++) {
    if (array[i] === target) break;
    console.log(`Index: ${i} - Value: ${array[i]}`);
}