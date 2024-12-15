// backend/routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add a product
router.post('/', async (req, res) => {
    const { name, price, description, image } = req.body;
    try {
        const newProduct = new Product({ name, price, description, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).send('Bad request');
    }
});

module.exports = router;
