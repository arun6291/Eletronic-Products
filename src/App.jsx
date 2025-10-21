import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductFilterPage from "./pages/ProductFilterPage"; // use exact case
import ProductDetailPage from "./context/ProductDetailPage";
import OrderSummaryPage from "./context/OrderSummaryPage";
import HomePage from "./pages/Home";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductFilterPage" element={<ProductFilterPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
      </Routes>
    </Router>
  )
}

export default App
