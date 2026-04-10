import React from "react";

function Home({ expenses, addExpense }) {

  const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

  const getCategoryTotal = (cat) => {
    return expenses
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + e.amount, 0);
  };

  return (
    <div style={{ textAlign: "center" }}>

      <div style={{
        border: "2px solid black",
        padding: "20px",
        width: "300px",
        margin: "auto",
        borderRadius: "10px",
        backgroundColor: "#e3f2fd"
      }}>
        <h2>Total Expense</h2>
        <h1>₹{totalExpense}</h1>
      </div>

      <h2>Add Expense</h2>

      {["Food", "Clothes", "Stationary", "Miscellaneous"].map((cat) => (
        <div key={cat} style={{
          border: "2px solid black",
          margin: "15px auto",
          padding: "15px",
          width: "320px",
          borderRadius: "10px",
          backgroundColor: "#bdda8b"
        }}>
          <h3>{cat}</h3>
          <p>Total: ₹{getCategoryTotal(cat)}</p>

          <button onClick={() => addExpense(cat, 100)}>₹100</button>
          <button onClick={() => addExpense(cat, 200)}>₹200</button>
          <button onClick={() => addExpense(cat, 500)}>₹500</button>
        </div>
      ))}

    </div>
  );
}

export default Home;