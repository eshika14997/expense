import React, { Component } from "react";

class ExpenseCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      balance: 5000,
      income: 0,
      expense: 0
    };
  }

  addIncome = () => {
    this.setState({
      income: this.state.income + 1000,
      balance: this.state.balance + 1000
    });
  };

  addExpense = () => {
    this.setState({
      expense: this.state.expense + 250,
      balance: this.state.balance - 250
    });
  };

  validateUser = () => {
    const validUsers = ["Student", "Admin"];
    return validUsers.includes(this.props.userType);
  };

  render() {

    const cardStyle = {
        alignItems:"center",
      border: "2px solid #34495e",
      borderRadius: "12px",
      padding: "20px",
      width: "300px",
      backgroundColor: "#e1d6fa",
      boxShadow: "0 6px 12px rgba(240, 106, 106, 0.15)",
      textAlign: "center"
      
    };

    const titleStyle = {
      color: "#1f618d",
      marginBottom: "10px"
    };

    const buttonStyle = {
      marginTop: "10px",
      padding: "8px 12px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    };

    const incomeBtn = {
      ...buttonStyle,
      backgroundColor: "green",
      color: "white",
      
    };

    const expenseBtn = {
      ...buttonStyle,
      backgroundColor: "red",
      color: "white",
      marginLeft: "10px"
    };

    return (
      <div style={cardStyle}>

        <h2 style={titleStyle}>{this.props.userType} Portal</h2>

        <p><b>User Name:</b> {this.props.userName}</p>

        {this.validateUser() ? (
          <p><b>Type:</b> {this.props.userType}</p>
        ) : (
          <p style={{ color: "red" }}>Invalid User</p>
        )}

        <hr/>

        <p><b>Balance:</b> ₹{this.state.balance}</p>
        <p><b>Income:</b> ₹{this.state.income}</p>
        <p><b>Expense:</b> ₹{this.state.expense}</p>

        <div>
          <button onClick={this.addIncome} style={incomeBtn}>
            Add Income
          </button>

          <button onClick={this.addExpense} style={expenseBtn}>
            Add Expense
          </button>
        </div>

      </div>
    );
  }
}

export default ExpenseCard;

