// backend/routes/orderRoutes.js
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create an order
router.post('/', async (req, res) => {
    const { userId, products, totalAmount, shippingAddress } = req.body;
    try {
        const newOrder = new Order({ userId, products, totalAmount, shippingAddress });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).send('Bad request');
    }
});

module.exports = router;
