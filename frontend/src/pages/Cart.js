// src/pages/Cart.js
import { useEffect, useState } from 'react';
import './cart.css';

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    setItems(saved ? JSON.parse(saved) : []);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Keranjang Belanja</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Keranjangmu kosong. Ayo belanja!</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Rp {item.price.toLocaleString()}</span>
                <span>x{item.quantity}</span>
                <span>Rp {(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> Rp {total.toLocaleString()}
          </div>
          <button className="btn btn--primary">Lanjut ke Checkout</button>
        </>
      )}
    </div>
  );
}