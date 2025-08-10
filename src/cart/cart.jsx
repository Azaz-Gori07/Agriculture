import React, { useState, useContext } from "react";
import "./cart.css";
import { CartContext } from "../hook/cartController.jsx"; // ✅ import context

function CartPage() {
  const [cartOpen, setCartOpen] = useState(false);

  // ✅ Context se cart data & functions
  const { cart, removeFromCart, updateQuantity, subtotal, shipping, total } =
    useContext(CartContext);

  return (
    <>
      {/* Mobile cart toggle button */}
      <button className="cart-toggle" onClick={() => setCartOpen(true)}>🛒 View Cart</button>

      {/* Desktop View */}
      <div className="cart-page">
        <div className="cart-items">
          <h2>Shopping cart</h2>
          {cart.length === 0 && <p>Your cart is empty.</p>}
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.color || ""}</p>
                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary">
          <h3>Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>USD ${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Check Out</button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-cart ${cartOpen ? "open" : ""}`}>
        <div className="mobile-cart-header">
          <h3>Your Cart</h3>
          <button onClick={() => setCartOpen(false)}>✕</button>
        </div>
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>{item.color || ""}</p>
              <div className="quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>USD ${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Check Out</button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
