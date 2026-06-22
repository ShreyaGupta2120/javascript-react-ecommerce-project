import React from 'react'

function Hero() {
  return (
    <div
      className="d-flex align-items-center justify-content-between px-5 py-5 my-4 rounded-4"
      style={{
        background: 'linear-gradient(135deg, #ede9f7, #d9ccf5)',
        boxShadow: '0 8px 30px rgba(111,66,193,0.15)',
      }}
    >
      <div>
        <span
          className="badge mb-3 px-3 py-2 rounded-pill"
          style={{ backgroundColor: '#6f42c1', fontSize: '0.85rem' }}
        >
          🎉 Limited Time Offer
        </span>
        <h1 className="fw-bold display-5">
          Big Deals: Up to{' '}
          <span style={{ color: '#6f42c1' }}>50% Off</span>
        </h1>
        <p className="text-muted fs-5">
          Shop the best products at unbeatable prices in India 🇮🇳
        </p>
        <button
          className="btn text-white px-4 py-2 rounded-pill fw-semibold"
          style={{ backgroundColor: '#6f42c1', boxShadow: '0 4px 15px rgba(111,66,193,0.4)' }}
        >
          Shop Now →
        </button>
      </div>
      <div style={{ fontSize: '5rem', lineHeight: 1.2 }}>
        🎧<br />📱<br />⌚
      </div>
    </div>
  )
}

export default Hero