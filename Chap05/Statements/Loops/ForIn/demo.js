let array = [];
let object = { x: 1, y: 2, z: 3};

for(let property in object) {
    console.log(`Property: ${property} - Value: ${object[property]}`);
    array.push(property);
}

console.log('\nNew array: ', array, '\n'); // [ 'x', 'y', 'z' ]

for(let index in array) {
    console.log(`Index: ${index} - Value: ${array[index]}`);
}