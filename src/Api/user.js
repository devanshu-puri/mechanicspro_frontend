import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Create user failed:", error);
    throw error;
  }
};
