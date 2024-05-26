//Assignment 3 Company Product Catalog

//Learning Objective: Implement data structures in TypeScript to represent and manage product information.

//Task: Create a program to represent a product catalog using an array and perform basic queries.

//1. Define an array named inventory to store product information.
//2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
//3. Add these product objects to the inventory array using an appropriate array method.
//4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
//5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.

type Products = {
    name: string;
    model: number;
    cost: number;
    quantity: number;
}

let product: Products= {
    name: "I Phone",
    model: 2024,
    cost: 300000,
    quantity: 5,
}
let product1: Products = {
    name: "hp",
    model: 2023,
    cost : 40000,
    quantity: 6,
}
let product2: Products = {
    name: "Sumsung",
    model: 2022,
    cost : 20000,
    quantity: 8,
}
let inventory  = {
    Product : [product,product1,product2] 
}
console.log("Quantity of the third product:",inventory.Product[2].quantity) ;

let product3: Products = {
    name: "Civic",
    model: 2022,
    cost: 800000,
    quantity: 4,
}
inventory.Product.push(product3)
console.log("Name of the fourth product:", inventory.Product[3].name);
console.log("Cost of the first product:", inventory.Product[0].cost);

