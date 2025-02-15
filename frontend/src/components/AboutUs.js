import React from "react";
import "./Styles.css";

function AboutUs() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
        <nav>
          <a href="/insights">INSIGHTS</a>
          <a href="/expense-tracker">Expense Tracker</a>
          <a href="/history">History</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main>
        <h2>Our Mission</h2>
        <p>We aim to help you manage your finances and track your expenses efficiently.</p>
      </main>
    </div>
  );
}

export default AboutUs;