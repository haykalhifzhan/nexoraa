// src/pages/Home.js
import { Link } from 'react-router-dom';
import './home.css';

// Ikon keranjang dari Heroicons (outline style)
const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.072.832l.284 1.136c.12.48.574.832 1.072.832h12.136c.51 0 .955-.343 1.072-.832l.284-1.136A1.5 1.5 0 0 1 19.5 3h1.5m-15 0a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V4.5A1.5 1.5 0 0 1 3 3Zm18 0a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V4.5a1.5 1.5 0 0 1 1.5-1.5h3Z" />
  </svg>
);

// Ikon mata (untuk detail produk)
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export default function Home() {
  // Data dummy — nanti bisa diganti dengan API
  const products = [
    { id: 1, name: 'Wireless Mouse', price: 149000 },
    { id: 2, name: 'Mechanical Keyboard', price: 899000 },
    { id: 3, name: 'Noise-Canceling Headset', price: 1250000 },
    { id: 4, name: 'Laptop Stand', price: 225000 },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Selamat Datang di Nexora</h1>
          <p className="hero-subtitle">
            Platform belanja digital yang tenang, profesional, dan mudah digunakan.
          </p>
          <Link to="/products" className="btn btn--primary">
            Jelajahi Produk
          </Link>
        </div>
      </section>

      {/* Produk Terbaru */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Produk Terbaru</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <ShoppingCartIcon />
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Rp {product.price.toLocaleString('id-ID')}</p>
                <div className="product-actions">
                  <Link to={`/products/${product.id}`} className="btn btn--secondary product-action-btn">
                    <EyeIcon /> Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}