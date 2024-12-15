// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [userId] = useState('user123'); // Example user ID

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));

        axios.get(`http://localhost:5000/api/cart/${userId}`)
            .then(res => setCart(res.data.items))
            .catch(err => console.error(err));
    }, [userId]);

    const addToCart = (productId, quantity) => {
        axios.post(`http://localhost:5000/api/cart/${userId}`, { productId, quantity })
            .then(res => setCart(res.data.items))
            .catch(err => console.error(err));
    };

    return (
        <div className="App">
            <h1>E-Commerce Shop</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
}

export default App;
