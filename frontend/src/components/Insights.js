import React, { useState } from "react";
import "./Styles.css";

function Insights() {
  const [income, setIncome] = useState(0);  // State for storing the entered income
  const [needs, setNeeds] = useState(0);
  const [wants, setWants] = useState(0);
  const [savings, setSavings] = useState(0);

  // Calculate the amounts based on the 50-30-20 rule
  const handleIncomeChange = (event) => {
    const incomeValue = event.target.value;
    setIncome(incomeValue);

    if (incomeValue > 0) {
      const needsAmount = (50 / 100) * incomeValue;
      const wantsAmount = (30 / 100) * incomeValue;
      const savingsAmount = (20 / 100) * incomeValue;

      setNeeds(needsAmount);
      setWants(wantsAmount);
      setSavings(savingsAmount);
    } else {
      setNeeds(0);
      setWants(0);
      setSavings(0);
    }
  };

  // Format currency in INR (₹)
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);
  };

  return (
    <div>
      <header>
        <h1>INSIGHTS:</h1>
        <nav>
          <a href="/insights">Insights</a>
          <a href="/expense-tracker">Expense Tracker</a>
          <a href="/history">History</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main>
        <h2>Enter your income:</h2>
        <input
          type="number"
          value={income}
          onChange={handleIncomeChange}
          placeholder="Enter your income"
          min="0"
        />
        {income > 0 && (
          <>
            <p>Generating your personalized budget plan...</p>
            <div id="chart">
             
              <ul>
                <li>Needs - <span>{formatCurrency(needs)}</span></li>
                <li>Wants - <span>{formatCurrency(wants)}</span></li>
                <li>Savings - <span>{formatCurrency(savings)}</span></li>
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Insights;