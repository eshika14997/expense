import React from "react";

function History({ expenses }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Expense History</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet</p>
      ) : (
        expenses.map((e, index) => (
          <div key={index} style={{
            border: "1px solid black",
            margin: "10px auto",
            padding: "10px",
            width: "300px",
            borderRadius: "8px",
            backgroundColor: "#9fd47e"
          }}>
            <h4>{e.category}</h4>
            <p>Amount: ₹{e.amount}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default History;