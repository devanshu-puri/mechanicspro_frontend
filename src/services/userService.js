import API_BASE_URL from "../utils/api";

export const getAllUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  return response.json();
};
