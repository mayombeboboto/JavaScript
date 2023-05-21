function printArray(array) {
    let len = array.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(array[i]);
        } while(++i < len)
    }
}

printArray([1, 2, 3, 4, 5]);