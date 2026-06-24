import React from 'react'

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', price: 134999, category: 'Electronics', emoji: '📱' },
  { id: 2, name: 'Sony WH-1000XM5', price: 29999, category: 'Electronics', emoji: '🎧' },
  { id: 3, name: 'Apple Watch Series 9', price: 41900, category: 'Electronics', emoji: '⌚' },
  { id: 4, name: 'MacBook Air M2', price: 114900, category: 'Electronics', emoji: '💻' },
  { id: 5, name: 'Adidas Ultraboost 22', price: 15999, category: 'Fashion', emoji: '👟' },
  { id: 6, name: 'Travel Laptop Backpack', price: 3999, category: 'Fashion', emoji: '🎒' },
  { id: 7, name: 'Samsung Galaxy S24', price: 79999, category: 'Electronics', emoji: '📲' },
  { id: 8, name: 'Nike Air Max', price: 12999, category: 'Fashion', emoji: '👠' },
  { id: 9, name: 'Boat Airdopes 141', price: 1299, category: 'Electronics', emoji: '🎵' },
  { id: 10, name: 'Wildcraft Backpack', price: 2499, category: 'Fashion', emoji: '🏕️' },
  { id: 11, name: 'iPad Air', price: 59900, category: 'Electronics', emoji: '📟' },
  { id: 12, name: 'Yoga Mat', price: 999, category: 'Sports', emoji: '🧘' },
]

function Products({ onAddToCart, searchQuery }) {
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="px-4 my-4">
      <h4 className="fw-bold mb-4">🔥 Featured Products</h4>

      {filtered.length === 0 ? (
        <div className="text-center py-5">
          <div style={{ fontSize: '4rem' }}>🔍</div>
          <p className="text-muted mt-3">No products found for "{searchQuery}"</p>
        </div>
      ) : (
        <div className="row g-4">
          {filtered.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <div
                className="card h-100 text-center p-3 border-0 rounded-4"
                style={{ boxShadow: '0 4px 15px rgba(111,66,193,0.15)' }}
              >
                <div className="fs-1 mb-2">{product.emoji}</div>
                <div className="card-body p-0">
                  <p className="fw-semibold mb-1" style={{ fontSize: '0.85rem' }}>{product.name}</p>
                  <p style={{ color: '#6f42c1' }} className="fw-bold">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <span
                    className="badge rounded-pill mb-2"
                    style={{ backgroundColor: '#ede9f7', color: '#6f42c1' }}
                  >
                    {product.category}
                  </span>
                  <button
                    className="btn btn-sm text-white w-100 rounded-3 mt-1"
                    style={{ backgroundColor: '#6f42c1' }}
                    onClick={() => onAddToCart(product)}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products