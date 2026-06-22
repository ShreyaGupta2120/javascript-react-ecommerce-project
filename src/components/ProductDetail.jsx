import React from 'react'

function ProductDetail({ product, onBack, onAddToCart }) {
  return (
    <div className="container py-5">
      <button
        className="btn mb-4 rounded-pill"
        style={{ backgroundColor: '#ede9f7', color: '#6f42c1' }}
        onClick={onBack}
      >
        ← Back to Products
      </button>

      <div className="row align-items-center g-5">
        <div className="col-md-5 text-center">
          <div
            className="rounded-4 d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: '#f3f0fb',
              height: '300px',
              fontSize: '8rem',
            }}
          >
            {product.emoji}
          </div>
        </div>

        <div className="col-md-7">
          <span className="badge rounded-pill mb-3 px-3 py-2"
            style={{ backgroundColor: '#ede9f7', color: '#6f42c1' }}>
            {product.category}
          </span>
          <h2 className="fw-bold mb-2">{product.name}</h2>
          <h3 style={{ color: '#6f42c1' }} className="fw-bold mb-3">
            ₹{product.price.toLocaleString('en-IN')}
          </h3>

          <p className="text-muted mb-4">
            This is a premium quality {product.name}. Get the best experience
            with top-notch performance, sleek design, and great value for money.
            Available now with fast delivery across India 🇮🇳
          </p>

          <div className="d-flex gap-2 mb-4">
            <span className="badge bg-success">✅ In Stock</span>
            <span className="badge" style={{ backgroundColor: '#ede9f7', color: '#6f42c1' }}>🚚 Free Delivery</span>
            <span className="badge" style={{ backgroundColor: '#ede9f7', color: '#6f42c1' }}>↩️ Easy Returns</span>
          </div>

          <button
            className="btn text-white px-5 py-2 rounded-pill fw-semibold"
            style={{ backgroundColor: '#6f42c1', boxShadow: '0 4px 15px rgba(111,66,193,0.4)' }}
            onClick={() => { onAddToCart(product); onBack(); }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail