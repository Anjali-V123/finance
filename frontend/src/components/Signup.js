import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  //const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response Status:", response.status);
      console.log("Response Data:", data);
      if (response.ok) {
        alert("Signup successful! Please log in.");
        navigate("/login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Signup</h1>
      <form onSubmit={handleSignup} style={styles.form}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  heading: { fontSize: "2em", marginBottom: "20px" },
  form: { display: "inline-block", textAlign: "left" },
  label: { display: "block", marginBottom: "5px", fontWeight: "bold" },
  input: { width: "100%", padding: "8px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" },
  button: { padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
};

export default Signup;