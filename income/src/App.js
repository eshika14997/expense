import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import History from "./History";
import About from "./About";
import Contact from "./Contact";

function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpense = (category, amount) => {
    setExpenses([...expenses, { category, amount }]);
  };

  const navContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px", 
    margin: "20px",
    flexWrap: "wrap"
  };

  const navButton = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#1f618d",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
  transition: "0.3s"
};

  return (
    <BrowserRouter>

      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>

      <div style={navContainer}>
        <Link to="/" style={navButton}>Home</Link>
        <Link to="/history" style={navButton}>History</Link>
        <Link to="/about" style={navButton}>About</Link>
        <Link to="/contact" style={navButton}>Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home expenses={expenses} addExpense={addExpense} />} />
        <Route path="/history" element={<History expenses={expenses} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;