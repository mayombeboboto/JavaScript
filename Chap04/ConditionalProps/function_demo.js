function square(x, log) {
    log?.(x); // No error thrown when callback is undefined.
    return x ** 2;
};

let value = 5;

let result1 = square(value, function (value) { console.log(value) });
console.log(result1);

// Callback function is undefined.
let result2 = square(value);
console.log(result2);

