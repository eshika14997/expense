import React from "react";

function About() {

  const boxStyle = {
    border: "2px solid black",
    borderRadius: "12px",
    padding: "20px",
    width: "60%",
    margin: "30px auto",
    backgroundColor: "#f4f8fb",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "left"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "15px"
  };

  return (
    <div>

      <h1 style={{ textAlign: "center" }}>About Expense Tracker</h1>

      <div style={boxStyle}>

        <h2 style={headingStyle}>How This Website Works</h2>

        <p>
          This Expense Tracker helps you manage your daily spending in a simple
          and organized way. It allows you to track expenses by category and
          automatically calculates totals.
        </p>

        <hr />

        <h3>Steps to Use:</h3>

        <ol>
          <li>
            Go to the <b>Home Page</b>.
          </li>
          <li>
            Choose a category like <b>Food, Clothes, Stationary, or Miscellaneous</b>.
          </li>
          <li>
            Click on one of the buttons: <b>₹100, ₹200, or ₹500</b>.
          </li>
          <li>
            The expense will be added automatically.
          </li>
          <li>
            The <b>Total Balance</b> updates instantly.
          </li>
          <li>
            Each category shows its own total amount.
          </li>
          <li>
            Go to the <b>History Page</b> to view all past expenses.
          </li>
        </ol>

        <hr />

      </div>

    </div>
  );
}

export default About;