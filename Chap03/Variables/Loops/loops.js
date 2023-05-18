const people = [
  {
    name: "Gradie",
    age: 29
  }, {
    name: "Anthony",
    age: 28
  }
];

const company = {
  name: "Kuantic",
  address: "Paris, France"
};

for (const person of people) console.log(person.valueOf());
for (const property in company) console.log(property);

