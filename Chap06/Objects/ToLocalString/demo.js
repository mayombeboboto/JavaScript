let point = {
    x: 1000, y: 2000,
    toString: function() {
        let value = `(${this.x}, ${this.y})`;
        return value;
    },
    toLocaleString: function() {
        let value = `(${this.x.toLocaleString()},` +
                    ` ${this.y.toLocaleString()})`;
        return value;
    }
}

console.log(point.toLocaleString());