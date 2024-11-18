const productContainer = document.querySelector("#product-container");

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then((data) => {
        console.log(data);

        data.products.forEach((product) => {
            productContainer.innerHTML += `
                <div class="product-card">
                    <img src="${product.thumbnail}" class="product-image" alt="Product Image">
                    <div class="product-details">
                        <h4>Title: ${product.title}</h4>
                        <h4>Category: ${product.category}</h4>
                        <h4>Price: $${product.price}</h4>
                        <button type="button" class="view-more" onclick="viewDetails(${product.id})">View Details</button>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => console.error("Error fetching products:", error));

function viewDetails(productId) {
    localStorage.setItem("selectedProduct", productId);
    window.location = "details.html";
}
