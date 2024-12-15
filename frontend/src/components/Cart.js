// frontend/src/components/Cart.js
import React from 'react';

function Cart({ cart }) {
    return (
        <div>
            <h2>Your Cart</h2>
            <div>
                {cart.map(item => (
                    <div key={item.productId}>
                        <p>{item.productId.name} x {item.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
