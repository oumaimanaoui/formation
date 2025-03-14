import React, { useState } from 'react';
import CartItem from './CartUtem';
import CartTotals from './CartToutls';
import './UiUxDesign.css';
import { Link } from 'react-router-dom'; // Importez Link
const WebManagemt = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/toup.png',
      title: 'Développement Web Haute Performance avec HTML5',
      price: 50.00,
      quantity: 1,
    },
  ]);

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
      alert('Stock disponible.'); // Affiche une alerte au lieu d'un message
    } else {
      alert('Stock insuffisant.'); // Affiche une alerte au lieu d'un message
    }
  };

  const handleProceedToPayment = () => {
    const confirmPayment = window.confirm('Confirmer le paiement ?');
    if (confirmPayment) {
      alert('Paiement validé.'); // Affiche une alerte au lieu d'un message
    } else {
      alert('Paiement annulé.'); // Affiche une alerte au lieu d'un message
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
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="coupon-code">
          <input type="number" placeholder="Quantité" />
          <button onClick={handleApplyCoupon}>Appliquer</button>
        </div>
        <div className="update-checkout">
          <button onClick={handleUpdateCart}>Mettre à Jour le Panier</button>
          <button onClick={handleProceedToPayment}>Procéder au Paiement</button>
        </div>
        <CartTotals subtotal={total} total={total} />
      </div>
      <Link to="/formation/html" className="return-to-shop">
        ← Retour à la Boutique
      </Link>
    </div>
  );
};

export default WebManagemt;