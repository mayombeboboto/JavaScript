let array = [1, 2, 3, 4, 5];
let target = 3;

function findIndexOfTarget(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == target) return i;
    }
    return -1;
}

console.log(findIndexOfTarget(array, target));