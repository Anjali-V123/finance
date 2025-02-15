import React, { useEffect, useState } from "react";
import "./Styles.css";

function History() {
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setExpensesList(data);
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <header>
        <h1>History</h1>
        <nav>
          <a href="/insights">INSIGHTS</a>
          <a href="/expense-tracker">Expense Tracker</a>
          <a href="/history">History</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main>
        <h2>Your Expense History</h2>
        <p>Here you can view all your past expenses.</p>
        <ul>
          {expensesList.length === 0 ? (
            <li>No expenses recorded yet.</li>
          ) : (
            expensesList.map((item, index) => (
              <li key={index}>
                {item.description}: ₹{item.amount}
              </li>
            ))
          )}
        </ul>
      </main>
    </div>
  );
}

export default History;