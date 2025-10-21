import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductFilterPage from "./pages/ProductFilterPage";
import ProductDetailPage from "./context/ProductDetailPage";
import OrderSummaryPage from "./context/OrderSummaryPage";
import HomePage from "./pages/Home";
import { CartProvider } from "./context/CartContext"; // import your provider
import ScrollToTop from "../src/components/BodySection/ScrollToTop";  
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductFilterPage" element={<ProductFilterPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;
