// src/pages/Products/ProductList.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './product-list.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error('❌ Error fetching products:', err);
        setError('Gagal memuat produk. Pastikan backend berjalan.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="products-page">
        <h2>Semua Produk</h2>
        <p>Memuat...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-page">
        <h2>Semua Produk</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="products-page">
        <h2>Semua Produk</h2>
        <p className="empty-message">Tidak ada produk ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="products-page">
      <h2>Semua Produk</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image || '/images/default-product.jpg'} 
                alt={product.name}
                onError={(e) => {
                  e.target.src = '/images/default-product.jpg';
                }}
              />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Rp {product.price.toLocaleString('id-ID')}</p>
            <Link to={`/products/${product._id}`} className="btn btn--secondary product-action-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}