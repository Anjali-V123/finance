import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Insights from "./components/Insights";
import ExpenseTracker from "./components/ExpenseTracker";
import History from "./components/History";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  // State to store the expenses
  const [expensesList, setExpensesList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route className="insights" path="/insights" element={<Insights />} />
        <Route path="/expense-tracker" element={<ExpenseTracker expensesList={expensesList} setExpensesList={setExpensesList} />} />
        <Route path="/history" element={<History expensesList={expensesList} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;