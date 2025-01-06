import React, { useState } from "react";
import './StockForm.css';

const StockForm = ({ onAddStock, onUpdateStock, closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    quantity: "",
    price: "", // Updated to match the backend schema
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      quantity: parseInt(formData.quantity, 10) || 0,
      price: parseFloat(formData.price) || 0.0,
    };
    if (editing) {
      onUpdateStock(formattedData);
    } else {
      onAddStock(formattedData);
    }

    setFormData({ name: "", symbol: "", quantity: "", price: "" });
    setEditing(false);
    closeForm();
  };

  const handleCancel = () => {
    setFormData({ name: "", symbol: "", quantity: "", price: "" });
    setEditing(false);
    closeForm();  // Close the form when cancel is clicked
  };

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <h2>Add Stock</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Stock Name"
        required
      />
      <input
        type="text"
        name="symbol"
        value={formData.symbol}
        onChange={handleChange}
        placeholder="Stock Symbol"
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
      />
      <input
        type="number"
        name="price" // Matches backend schema
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <div className="button-group">
        <button type="submit">{editing ? "Update Stock" : "Add Stock"}</button>
        <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button></div>
    </form>
  );
};

export default StockForm;
