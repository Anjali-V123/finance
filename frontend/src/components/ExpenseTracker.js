import React, { useState } from "react";
import "./Styles.css";

function ExpenseTracker() {
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [expensesList, setExpensesList] = useState([]);

  const fetchExpenses = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/expenses", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setExpensesList(data);
  };

  const handleExpenseSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ description, amount: parseFloat(expense) }),
    });

    if (response.ok) {
      fetchExpenses();
      setExpense("");
      setDescription("");
    } else {
      alert("Failed to add expense.");
    }
  };

  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
        <nav>
          <a href="/insights">Insights</a>
          <a href="/expense-tracker">Expense Tracker</a>
          <a href="/history">History</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main>
        <h2>Track Your Expenses</h2>
        <form onSubmit={handleExpenseSubmit}>
          <input
            type="number"
            placeholder="Enter expense amount"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            required
          /><br/>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          /><br/>
          <button type="submit">Add Expense</button>
        </form>
        <h3>Expenses List</h3>
        <ul>
          {expensesList.map((item, index) => (
            <li key={index}>
              {item.description}: ₹{item.amount}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ExpenseTracker;