import React from 'react';

const CartUtem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-title">{item.title}</div>
      <div className="item-price">${item.price.toFixed(2)}</div>
      <div className="item-quantity">{item.quantity}</div>
      <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartUtem;