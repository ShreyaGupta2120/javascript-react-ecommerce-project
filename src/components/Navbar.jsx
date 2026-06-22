import React from 'react'

function Navbar({ cartCount }) {
  return (
    <nav
      className="navbar navbar-expand-lg px-4 py-3 sticky-top"
      style={{
        background: 'white',
        boxShadow: '0 2px 20px rgba(111,66,193,0.15)',
      }}
    >
      <a className="navbar-brand fw-bold fs-3" href="#">
        <span style={{ color: '#6f42c1' }}>Shop</span>
        <span style={{ color: '#333' }}>Ease</span>
        <span style={{ fontSize: '1.2rem' }}> 🛍️</span>
      </a>

      <div className="mx-auto w-50">
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-pill border-0 ps-4"
            placeholder="🔍 Search for products..."
            style={{ backgroundColor: '#f3f0fb' }}
          />
        </div>
      </div>

      <div className="ms-4 d-flex gap-3 align-items-center">
        <span className="text-muted fw-semibold">🇮🇳 India</span>
        <button
          className="btn text-white position-relative px-4 rounded-pill"
          style={{ backgroundColor: '#6f42c1' }}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar