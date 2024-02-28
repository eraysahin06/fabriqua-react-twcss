import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './index.css';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';

// eslint-disable-next-line react-refresh/only-export-components
const AppRoot = () => (
  <React.StrictMode>
    <Router>
        <Navbar />
          <Routes>
            <Route path="*" element={<p>Path not resolved</p>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
          <Footer />
    </Router>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<AppRoot />);
