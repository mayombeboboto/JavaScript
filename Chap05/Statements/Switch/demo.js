function convert(value) {
    switch (typeof value) {
        case "number":
            return value.toString(16);
        case "string":
            return '"' + value + '"';
        default:
            return String(value)
    }
}

console.log(convert(16));
console.log(convert('A'));
console.log(convert(undefined));