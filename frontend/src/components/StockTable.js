import React, { useState } from "react";
import './StockTable.css';

const StockTable = ({ stocks, onDeleteStock, onUpdateStock }) => {
  // State to hold the current stock being edited
  const [editingStock, setEditingStock] = useState(null);

  const handleEditClick = (stock) => {
    // Set the stock to be edited when the edit button is clicked
    setEditingStock(stock);
  };

  const handleSaveClick = () => {
    // Save the changes made to the stock
    if (editingStock) {
      onUpdateStock(editingStock);
      setEditingStock(null); // Close the edit form
    }
  };

  const handleCancelClick = () => {
    // Cancel the editing and close the edit form
    setEditingStock(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingStock((prevStock) => ({
      ...prevStock,
      [name]: value,
    }));
  };

  return (
    <div className="stock-table">
      <h2>Stock Holdings</h2>

      {/* Display the edit form if a stock is being edited */}
      {editingStock ? (
        <div className="edit-form">
          <h3>Edit Stock</h3>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={editingStock.name}
            onChange={handleChange}
          />
          <label>Symbol</label>
          <input
            type="text"
            name="symbol"
            value={editingStock.symbol}
            onChange={handleChange}
          />
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={editingStock.quantity}
            onChange={handleChange}
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={editingStock.price}
            onChange={handleChange}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>${stock.price}</td>
                <td>
                  <button onClick={() => handleEditClick(stock)}>Edit</button>
                  <button onClick={() => onDeleteStock(stock.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockTable;
