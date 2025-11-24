import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TTSButton from './components/TTSButton';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import ReorderPage from './pages/ReorderPage';
import ShopByListPage from './pages/ShopByListPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderTrackingPage from './pages/OrderTrackingPage';

import ProfilePage from './pages/ProfilePage';

import { useCart } from './context/CartContext';
import Toast from './components/Toast';

const ToastWrapper = () => {
  const { notification, closeNotification } = useCart();
  return (
    <Toast
      message={notification.message}
      isVisible={notification.visible}
      onClose={closeNotification}
    />
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="app-wrapper">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/reorder" element={<ReorderPage />} />
              <Route path="/shop-by-list" element={<ShopByListPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/tracking" element={<OrderTrackingPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer />
            <TTSButton />
            <ToastWrapper />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
