import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import DashboardHeader from "./DashboardHeader";
import ExpenseCard from "./ExpenseCard";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Contact from "./Contact";

function App() {

  const pageStyle = {
    textAlign: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ebf5fb",
    minHeight: "100vh",
    fontFamily: "Arial"
  };

  const navStyle = {
    margin: "20px 0"
  };

  const linkStyle = {
    marginRight: "15px",
    color: "#1f618d",
    fontWeight: "bold"
  };

  return (
    <BrowserRouter>
      <div style={pageStyle}>

        <DashboardHeader
          title="Expense Tracker Dashboard"
          subtitle="Track your income and expenses easily"
        />

        {/* Navigation */}
        <div style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/tracker" style={linkStyle}>Tracker</Link>
          <Link to="/how" style={linkStyle}>How It Works</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </div>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/tracker" element={
            <div style={{pageStyle}}>
              
              {/* Student Card */}
              <ExpenseCard
                userName="Eshika"
                userType="Student"
              />

              {/* Admin Card */}
              <ExpenseCard
                userName="Admin User"
                userType="Admin"
              />

            </div>
          } />

          <Route path="/how" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

