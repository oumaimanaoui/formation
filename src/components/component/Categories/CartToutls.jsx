import React from 'react';

const CartToutls = ({ subtotal, total }) => {
  return (
    <div className="cart-totals">
      <div className="order-details">
        <h3>Order Details</h3>
        <div className="totals">
          <div className="subtotal">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartToutls;