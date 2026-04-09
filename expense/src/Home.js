import React, { useState, useEffect } from "react";

function Home() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome to Expense Tracker Dashboard");
  }, []);

  const cardStyle = {
    backgroundColor: "#a7cfdd",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  };

  return (
    <div style={cardStyle}>
      <h2>Home Page</h2>
      <p>{message}</p>
      <p>Use this application to track your income and expenses easily.</p>
    </div>
  );
}

export default Home;
