import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../Api/Apiurl";

const AdminUserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const API_URL_FULL = `${API_URL}/api/users`;

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL_FULL);
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }, [API_URL_FULL]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL_FULL}/${id}`, { method: "DELETE" });
        if (!response.ok) {
          throw new Error("Error deleting user");
        }
        fetchUsers();
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="admin-user-page">
      <h1 className="text-center mb-5">Admin User Management</h1>

      {loading && <p>Loading...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="text-center">
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.type}</td>
                  <td>{new Date(user.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDelete(user._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUserTable;
