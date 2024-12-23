import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDashboard from './components/ProductDashboard'
import AddProduct from './components/AddProduct'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  )
}

export default App
