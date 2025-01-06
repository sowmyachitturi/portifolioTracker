import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/stocks'; // Replace with your backend API URL

export const getStocks = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
};

export const addStock = async (stock) => {
  try {
    const response = await axios.post(apiUrl, stock);
    return response.data;
  } catch (error) {
    console.error("Error adding stock:", error);
  }
};

export const updateStock = async (stock) => {
  try {
    const response = await axios.put(`${apiUrl}/${stock.id}`, stock);
    return response.data;
  } catch (error) {
    console.error("Error updating stock:", error);
  }
};

export const deleteStock = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error("Error deleting stock:", error);
  }
};
