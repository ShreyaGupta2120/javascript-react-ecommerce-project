import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />

      {cartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemove}
        />
      )}

      <div className="container-fluid">
        <Hero />
        <Products
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App