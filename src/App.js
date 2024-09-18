import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header component visible on all pages */}
        <Header />
        
        {/* Main content - dynamically loaded based on the route */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        {/* Footer component visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
