let array = [1, 2, 3, 4, 5];
let target = 3;

for(let i = 0; i < array.length; i++) {
    if(array[i] === target) continue;

    console.log(array[i]);
}