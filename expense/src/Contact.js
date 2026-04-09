import React from "react";

function Contact() {

  const cardStyle = {
    backgroundColor: "#f7fbeb",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  };

  return (
    <div style={cardStyle}>
      <h2>Contact Page</h2>

      <p><b>Name:</b> Eshika Patel</p>
      <p><b>Email:</b> expense.123@mail.com</p>
      <p><b>Phone:</b> +91 8238XXX</p>
    </div>
  );
}

export default Contact;
