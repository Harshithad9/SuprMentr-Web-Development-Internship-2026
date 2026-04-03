const products = [
    { name: "Laptop", category: "electronics", price: 60000, image: "" },
    { name: "Phone", category: "electronics", price: 30000, image: "" },
    { name: "T-Shirt", category: "clothing", price: 800, image: "" },
    { name: "Jeans", category: "clothing", price: 1500, image: "" }
];

function displayProducts(items) {
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    items.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" />
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <p>${product.category}</p>
            </div>
        `;
    });
}

function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Load all products initially
displayProducts(products);