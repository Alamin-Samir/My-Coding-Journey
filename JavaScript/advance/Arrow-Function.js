const add = (a, b) => a + b;
console.log(add(5, 3)); // আউটপুট: 8


const products = ["Laptop", "Phone", "Headphone"];

// map ব্যবহার করে প্রতিটি আইটেমকে লিস্ট আইটেম (<li>) এ রূপান্তর করা
const productList = products.map(item => `<li>${item}</li>`);

console.log(productList);
// আউটপুট: ['<li>Laptop</li>', '<li>Phone</li>', '<li>Headphone</li>']