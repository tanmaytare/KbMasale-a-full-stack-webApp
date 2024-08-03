const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Tanmay!");
});

app.listen(port, () => {
    console.log(`Running on port http://localhost:${port}`);
});

async function Connectdb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "Contact"
    });
}

Connectdb().catch((err) => console.log(err));

const { addUser, getUsers, SignupUser, getSignUsers, login, addProduct, getProducts, deleteProduct,updateProduct } = require("./Handler/handler");

// Contact Form
app.post('/data', async (req, res) => {
    try {
        const newUser = await addUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save user' });
    }
});

app.get('/data', async (req, res) => {
    let users = await getUsers();
    res.send(users);
});

// Sign-Up
app.post('/signup', async (req, res) => {
    try {
        const newUser = await SignupUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        if (error.message === 'User already exists') {
            res.status(400).json({ message: error.message });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Failed to save user' });
        }
    }
});

app.get('/signup', async (req, res) => {
    let users = await getSignUsers();
    res.send(users);
});

// Login
app.post('/login', async (req, res) => {
    try {
        const user = await login(req.body);
        res.status(200).json(user);
    } catch (error) {
        if (error.message === 'Invalid email or password') {
            res.status(400).json({ message: error.message });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Login failed' });
        }
    }
});

// Add Product
app.post("/products", async (req, res) => {
    try {
        const newProduct = await addProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save product' });
    }
});

// Get Products
app.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Delete Product
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProduct(id);
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

// Update Product
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedProduct = await updateProduct(id, updateData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
});
