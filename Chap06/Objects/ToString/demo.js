let point = {
    x: 1, y: 2,
    toString: function() { 
        let value = `(${this.x}, ${this.y})`;
        return value;
    }
}

console.log(point.toString());