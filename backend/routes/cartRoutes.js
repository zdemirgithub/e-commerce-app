// backend/routes/cartRoutes.js
const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Get cart
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.json(cart);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add item to cart
router.post('/:userId', async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            cart = new Cart({ userId: req.params.userId, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex >= 0) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(400).send('Bad request');
    }
});

module.exports = router;
