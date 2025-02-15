import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p id="fb">FINANCE ADVISOR</p>
      <div id="logo">
        <figure>
          <img
            src="https://companieslogo.com/img/orig/BAJFINANCE.NS-1c922000.png?t=1720244490"
            alt="Logo"
          />
          <figcaption id="fc">..Embark on your financial journey..</figcaption>
        </figure>
      </div>
      <div id="log">
        <Link to="/login" id="login" className="sign">
          Login
        </Link>
        <Link to="/signup" id="signup" className="sign">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Home;