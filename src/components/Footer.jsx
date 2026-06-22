import React from 'react'

function Footer() {
  return (
    <footer
      className="mt-5 py-5 px-4"
      style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: 'white' }}
    >
      <div className="row">

        <div className="col-md-3 mb-4">
          <h5 className="fw-bold mb-3">
            <span style={{ color: '#a78bfa' }}>Shop</span>Ease 🛍️
          </h5>
          <p style={{ color: '#aaa' }}>
            India's favourite one-stop shop for the best products at the best prices.
          </p>
          <div className="d-flex gap-3 fs-4 mt-3">
            <span style={{ cursor: 'pointer' }}>📘</span>
            <span style={{ cursor: 'pointer' }}>🐦</span>
            <span style={{ cursor: 'pointer' }}>📸</span>
            <span style={{ cursor: 'pointer' }}>💼</span>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <h6 className="fw-bold mb-3" style={{ color: '#a78bfa' }}>Quick Links</h6>
          <ul className="list-unstyled" style={{ color: '#aaa' }}>
            <li className="mb-2">🏠 Home</li>
            <li className="mb-2">🛒 Shop</li>
            <li className="mb-2">📦 Categories</li>
            <li className="mb-2">🔥 Deals</li>
          </ul>
        </div>

        <div className="col-md-3 mb-4">
          <h6 className="fw-bold mb-3" style={{ color: '#a78bfa' }}>Customer Service</h6>
          <ul className="list-unstyled" style={{ color: '#aaa' }}>
            <li className="mb-2">📞 Contact Us</li>
            <li className="mb-2">❓ FAQs</li>
            <li className="mb-2">🚚 Shipping & Delivery</li>
            <li className="mb-2">↩️ Returns & Refunds</li>
          </ul>
        </div>

        <div className="col-md-3 mb-4">
          <h6 className="fw-bold mb-3" style={{ color: '#a78bfa' }}>Newsletter</h6>
          <p style={{ color: '#aaa' }}>
            Subscribe to get the latest deals and exclusive offers! 🎉
          </p>
          <div className="d-flex gap-2 mt-3">
            <input
              type="email"
              className="form-control rounded-pill border-0 ps-3"
              placeholder="Enter your email"
              style={{ backgroundColor: '#2a2a4a', color: 'white' }}
            />
            <button
              className="btn text-white rounded-pill px-3"
              style={{ backgroundColor: '#6f42c1' }}
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <hr style={{ borderColor: '#333' }} />
      <div className="text-center mt-3" style={{ color: '#aaa' }}>
        © 2024 ShopEase 🛍️ | Made with ❤️ in India 🇮🇳
      </div>
    </footer>
  )
}

export default Footer