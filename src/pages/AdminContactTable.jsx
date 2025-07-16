import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../Api/Apiurl";

const AdminContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const API_URL_FULL = `${API_URL}/api/contacts`;

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL_FULL);
      if (!response.ok) {
        throw new Error("Error fetching contacts");
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }, [API_URL_FULL]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL_FULL}/${id}`, { method: "DELETE" });
        if (!response.ok) {
          throw new Error("Error deleting contact");
        }
        fetchContacts();
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="admin-contact-page">
      <h1 className="text-center mb-5">Admin Contact Management</h1>

      {loading && <p>Loading...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="text-center">
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Message</th>
                <th>Submitted At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.mobileNumber}</td>
                  <td>{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDelete(contact._id)}
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

export default AdminContactTable;
