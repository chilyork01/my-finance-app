// src/App.js

import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import IncomeForm from './components/IncomeForm';
import Balance from './components/Balance';
import './App.css';

const App = () => {
  // Estado para gastos e ingresos
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  // Cargar los datos guardados del localStorage cuando el componente se monta
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    const savedIncomes = localStorage.getItem('incomes');
    
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
    if (savedIncomes) {
      setIncomes(JSON.parse(savedIncomes));
    }
  }, []);

  // Guardar los datos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('incomes', JSON.stringify(incomes));
  }, [expenses, incomes]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalIncomes = incomes.reduce((total, income) => total + income.amount, 0);

  return (
    <div className="container">
      <div className="app-container">
        <h1>Gestión de Finanzas</h1>
        <IncomeForm addIncome={addIncome} />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <Balance totalIncome={totalIncomes} totalExpenses={totalExpenses} />
      </div>
      <footer className="footer">
        <p>&copy; 2024 Leonardo Vergara. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
