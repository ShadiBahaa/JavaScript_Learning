// Define an object `user` with three properties: name, age, and city
let user = {
  name: "John", // The user's name
  age: 30,      // The user's age
  city: "New York", // The user's city
};

// Iterate over the `user` object using a `for...in` loop
for (let key in user) {
  // Log each key-value pair in the format "key: value"
  console.log(`${key}: ${user[key]}`);
}
// Outputs:
// name: John
// age: 30
// city: New York

// Define another object `product` with three properties: name, price, and inStock
let product = {
  name: "Laptop",   // The product's name
  price: 999,       // The product's price
  inStock: true,    // Whether the product is in stock
};

// Iterate over the keys of the `product` object using `Object.keys()`
// `Object.keys()` returns an array of the object's keys
Object.keys(product).forEach((key) => {
  // Log each key-value pair in the format "key: value"
  console.log(`${key}: ${product[key]}`);
});

// Iterate over the values of the `product` object using `Object.values()`
// `Object.values()` returns an array of the object's values
Object.values(product).forEach((value) => {
  // Log each value
  console.log(value);
});

// Iterate over the entries of the `product` object using `Object.entries()`
// `Object.entries()` returns an array of key-value pairs as sub-arrays
Object.entries(product).forEach(([key, value]) => {
  // Log each key-value pair in the format "key: value"
  console.log(`${key}: ${value}`);
});