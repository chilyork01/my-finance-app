// src/components/Balance.js

import React from 'react';

const Balance = ({ totalIncome, totalExpenses }) => {
  const balance = totalIncome - totalExpenses;

  return (
    <div className="balance">
      <h2>Saldo Disponible</h2>
      <h3>${balance.toFixed(2)}</h3>
      <p>Ingresos Totales: ${totalIncome.toFixed(2)}</p>
      <p>Gastos Totales: ${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
