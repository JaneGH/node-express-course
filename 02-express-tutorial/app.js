console.log('Express Tutorial')

const express = require('express');

const { products } = require("./data");

const app = express();

app.use(express.static("./public"));

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {

    const idToFind = parseInt(req.params.productID);

    if (isNaN(idToFind)) {
        res.status(404).json({ message: "That product was not found." });
        return;
    }

    const product = products.find((p) => p.id === idToFind);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "That product was not found." });
    }
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit, regex, maxPrice } = req.query; 
    let filteredProducts = [...products];

    if (search) {
        if (regex === 'true') {
            try {
                const pattern = new RegExp(search, 'i');
                filteredProducts = filteredProducts.filter(product =>
                    pattern.test(product.name)
                );
            } catch (error) {
                res.status(400).json({ message: "Invalid regular expression pattern" });
                return;
            }
        } else {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().startsWith(search.toLowerCase())
            );
        }
    }

    if (maxPrice) {
        filteredProducts = filteredProducts.filter(product =>
            product.price <= parseFloat(maxPrice)
        );
    }

    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit, 10));
    }

    res.json(filteredProducts);
});

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
  });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });

