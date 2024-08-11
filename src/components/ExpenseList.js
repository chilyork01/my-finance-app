import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  const groupedExpenses = expenses.reduce((groups, expense) => {
    if (!groups[expense.category]) {
      groups[expense.category] = [];
    }
    groups[expense.category].push(expense);
    return groups;
  }, {});

  return (
    <div>
      {Object.keys(groupedExpenses).map((category) => (
        <div className="category-card" key={category}>
          <h2>{category}</h2>
          <ul>
            {groupedExpenses[category].map((expense, index) => (
              <li key={index}>
                {expense.name}: ${expense.amount}
                <button onClick={() => deleteExpense(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
