//Assignment 3 Company Product Catalog
var product = {
    name: "I Phone",
    model: 2024,
    cost: 300000,
    quantity: 5,
};
var product1 = {
    name: "hp",
    model: 2023,
    cost: 40000,
    quantity: 6,
};
var product2 = {
    name: "Sumsung",
    model: 2022,
    cost: 20000,
    quantity: 8,
};
var inventory = {
    Product: [product, product1, product2]
};
console.log("Quantity of the third product:", inventory.Product[2].quantity);
var product3 = {
    name: "Civic",
    model: 2022,
    cost: 800000,
    quantity: 4,
};
inventory.Product.push(product3);
console.log("Name of the fourth product:", inventory.Product[3].name);
console.log("Cost of the first product:", inventory.Product[0].cost);
