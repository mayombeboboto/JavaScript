function factorial(value) {
    if (value < 0) throw new Error("Negative value");
    if (value === 0) return 1;

    let total = 1;
    do {
        total *= value;
        value --;
    } while(value > 1)

    return total;
}

try {
    let result = factorial(-1);
    console.log(`factorial(-1) => ${result}`);
} catch (error) {
    console.log(`Name: ${error.name} - Message: ${error.message}`);
}