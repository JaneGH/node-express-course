document.addEventListener('DOMContentLoaded', () => {
    const fetchProductsBtn = document.getElementById('fetchProductsBtn');
    const productsList = document.getElementById('productsList');

    fetchProductsBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/v1/products');
            if (!response.ok) {
                throw new Error('Failed get products');
            }

            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    function displayProducts(products) {
        productsList.innerHTML = ''; 
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
            `;
            productsList.appendChild(productElement);
        });
    }
});
