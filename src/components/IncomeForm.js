// src/components/IncomeForm.js

import React, { useState } from 'react';

const IncomeForm = ({ addIncome }) => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (source && amount) {
      addIncome({ source, amount: parseFloat(amount) });
      setSource('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Fuente de ingreso"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Monto"
      />
      <button type="submit">Agregar Ingreso</button>
    </form>
  );
};

export default IncomeForm;
