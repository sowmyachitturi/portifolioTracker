import React from "react";
import './Dashboard.css';

const Dashboard = ({ stocks }) => {
  if (!stocks || stocks.length === 0) {
    return (
      <div className="dashboard">
        <h2>Portfolio Dashboard</h2>
        <p>No stocks available in the portfolio.</p>
      </div>
    );
  }

  const totalValue = stocks.reduce((total, stock) =>
    total + (stock.quantity || 0) * (stock.price || 0),
    0
  );

  const topPerformingStock = stocks.reduce((top, stock) =>
    (top.price * top.quantity < stock.price * stock.quantity) ? stock : top,
    stocks[0]
  );

  return (
    <div className="dashboard">
      <h2>Portfolio Dashboard</h2>
      <p><strong>Total Portfolio Value: </strong>${totalValue.toFixed(2)}</p>
      <p>
        <strong>Top Performing Stock: </strong>
        {topPerformingStock?.name || "N/A"} - $
        {topPerformingStock?.price?.toFixed(2) || "N/A"}
      </p>
    </div>
  );
};

export default Dashboard;
