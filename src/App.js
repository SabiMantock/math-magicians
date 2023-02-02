import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
