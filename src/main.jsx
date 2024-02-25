import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// Tailwind CSS
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const AppRoot = () => (
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="*" element={<p>Path not resolved</p>} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<AppRoot />);
