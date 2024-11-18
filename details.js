const productDetailsContainer = document.querySelector("#product-details");

const selectedProductId = localStorage.getItem("selectedProduct");
console.log("Selected Product ID:", selectedProductId);

fetch(`https://dummyjson.com/products/${selectedProductId}`)
    .then(response => response.json())
    .then((product) => {
        productDetailsContainer.innerHTML += `
            <div class="details-card">
                <img src="${product.thumbnail}" class="details-image" alt="Product Image">
                <div class="details-info">
                    <h2>${product.title}</h2>
                    <h4>Category: ${product.category}</h4>
                    <p>${product.description}</p>
                    <h4>Price: $${product.price}</h4>
                    <h4>Rating: ${product.rating}</h4>
                    <h4>Stock: ${product.stock}</h4>
                    <h4>Discount: ${product.discountPercentage}%</h4>
                </div>
            </div>
        `;
    })
    .catch(error => console.error("Error fetching product details:", error));
