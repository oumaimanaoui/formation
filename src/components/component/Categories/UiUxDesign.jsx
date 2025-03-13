import React, { useState } from 'react';
import CartTotals from './CartToutls';
import './UiUxDesign.css';
import { Link, useLocation } from 'react-router-dom';

const UiUxDesign = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [cartItems, setCartItems] = useState(product ? [{
    id: 1, // Vous pouvez générer un ID unique ici si nécessaire
    image: product.image,
    title: `Course by ${product.teacher}`,
    price: parseFloat(product.price),
    quantity: 1,
  }] : []);
  const [quantity, setQuantity] = useState(1);

  const handleApplyCoupon = () => {
    const newQuantity = parseInt(document.querySelector('.coupon-code input').value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
      setCartItems(cartItems.map(item => ({ ...item, quantity: newQuantity })));
    } else {
      alert('Veuillez saisir une quantité valide.');
    }
  };

  const handleUpdateCart = () => {
    const stockDisponible = 10;
    if (quantity <= stockDisponible) {
      alert('Stock disponible.');
    } else {
      alert('Stock insuffisant.');
    }
  };

  const handleProceedToPayment = () => {
    const confirmPayment = window.confirm('Confirmer le paiement ?');
    if (confirmPayment) {
      alert('Paiement validé.');
    } else {
      alert('Paiement annulé.');
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Panier d'achat</h2>
      <div className="cart-items">
        <div className="cart-header">
          <span>Product Image</span>
          <span>Product Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="coupon-code">
          <input type="number" placeholder="Quantité" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
          <button onClick={handleApplyCoupon}>Appliquer</button>
        </div>
        <div className="update-checkout">
          <button onClick={handleUpdateCart}>Mettre à Jour le Panier</button>
          <button onClick={handleProceedToPayment}>Procéder au Paiement</button>
        </div>
        <CartTotals subtotal={total} total={total} />
      </div>
      <Link to="/cours" className="return-to-shop">
        ← Retour à la Boutique
      </Link>
    </div>
  );
};

export default UiUxDesign;