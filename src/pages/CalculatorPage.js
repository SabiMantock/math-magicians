import React from 'react';
import Calculator from '../components/Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => (
  <div className="calpage">
    <h2 className="text">Let&apos;s do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
