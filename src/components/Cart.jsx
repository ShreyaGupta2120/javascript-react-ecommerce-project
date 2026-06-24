import React from 'react'

function Cart({ cartItems, onClose, onRemove }) {
  const total = cartItems.reduce(function(sum, item) {
    return sum + item.price * item.quantity
  }, 0)

  return (
    <div
      className="position-fixed top-0 end-0 h-100 bg-white shadow-lg p-4"
      style={{ width: '350px', zIndex: 9999, overflowY: 'auto' }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Your Cart</h5>
        <button
          className="btn btn-sm btn-light rounded-pill"
          onClick={onClose}
        >
          X Close
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <div style={{ fontSize: '4rem' }}>🛒</div>
          <p className="text-muted mt-3">Your cart is empty!</p>
        </div>
      ) : (
        <div>
          {cartItems.map(function(item) {
            return (
              <div
                key={item.id}
                className="d-flex align-items-center gap-3 mb-3 p-3 rounded-4"
                style={{ backgroundColor: '#f3f0fb' }}
              >
                <div style={{ fontSize: '2.5rem' }}>{item.emoji}</div>
                <div className="flex-grow-1">
                  <p className="fw-semibold mb-0" style={{ fontSize: '0.85rem' }}>
                    {item.name}
                  </p>
                  <p className="mb-0" style={{ color: '#6f42c1' }}>
                    Rs.{item.price.toLocaleString('en-IN')} x {item.quantity}
                  </p>
                </div>
                <button
                  className="btn btn-sm btn-danger rounded-pill"
                  onClick={function() { onRemove(item.id) }}
                >
                  Remove
                </button>
              </div>
            )
          })}

          <hr />

          <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
            <span>Total:</span>
            <span style={{ color: '#6f42c1' }}>
              Rs.{total.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            className="btn text-white w-100 rounded-pill py-2 fw-semibold"
            style={{ backgroundColor: '#6f42c1' }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart