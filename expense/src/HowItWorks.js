import React from "react";

function HowItWorks() {

  const cardStyle = {
    backgroundColor: "#c6e6d0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  };

  return (
    <div style={cardStyle}>
      <h2>How It Works</h2>

      <p>This Expense Tracker helps you manage your daily finances.</p>

      <ul>
        <li>Go to the Tracker page.</li>
        <li>Click "Add Income" to increase balance.</li>
        <li>Click "Add Expense" to reduce balance.</li>
        <li>Balance updates automatically.</li>
      </ul>

      <p>This helps you keep track of your spending and savings.</p>
    </div>
  );
}

export default HowItWorks;
