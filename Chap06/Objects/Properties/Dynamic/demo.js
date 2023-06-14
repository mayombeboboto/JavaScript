const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; };

let object = {};

let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};

console.log(p.p1 + p.p2);