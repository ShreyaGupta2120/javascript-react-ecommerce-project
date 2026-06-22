import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [notification, setNotification] = useState(null)

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1)
    setNotification(product.name)
    setTimeout(() => setNotification(null), 2000)
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />

      {notification && (
        <div
          className="position-fixed top-0 end-0 m-4 p-3 bg-white shadow rounded d-flex align-items-center gap-2"
          style={{ zIndex: 9999 }}
        >
          <span style={{ color: '#6f42c1' }}>✅</span>
          <div>
            <strong style={{ color: '#6f42c1' }}>{notification}</strong>
            <br />
            <small>added to cart</small>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <Footer />
      </div>
    </div>
  )
}

export default App