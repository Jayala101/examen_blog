import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CategoryManager from './components/CategoryManager';
import Calculations from './components/Calculations';

const App: React.FC = () => (
  <Router>
    <nav style={{ background: '#222', padding: 12, color: '#fff', marginBottom: 24 }}>
      <Link to="/" style={{ color: '#fff', marginRight: 16, textDecoration: 'none' }}>Inicio</Link>
      <Link to="/categories" style={{ color: '#fff', marginRight: 16, textDecoration: 'none' }}>Categorías</Link>
      <Link to="/calculations" style={{ color: '#fff', textDecoration: 'none' }}>Cálculos</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<CategoryManager />} />
      <Route path="/calculations" element={<Calculations />} />
    </Routes>
  </Router>
);

export default App;
