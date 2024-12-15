// frontend/src/components/ProductList.js
import React from 'react';

function ProductList({ products, addToCart }) {
    return (
        <div>
            <h2>Products</h2>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <img src={product.image} alt={product.name} width="100" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product._id, 1)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
