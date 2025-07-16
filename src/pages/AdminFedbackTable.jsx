import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { API_URL } from '../Api/Apiurl';

const AdminFedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    date: "",
    img: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL_FULL = `${API_URL}/api/feedbacks`;

  const fetchFeedbacks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL_FULL);
      if (!response.ok) throw new Error("Error fetching feedbacks");
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }, [API_URL_FULL]);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setFormData({ ...formData, img: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("text", formData.text);
    form.append("date", formData.date);
    if (formData.img) form.append("img", formData.img);
    setLoading(true);
    try {
      if (editingId) {
        const response = await fetch(`${API_URL_FULL}/${editingId}`, {
          method: "PUT",
          body: form,
        });
        if (!response.ok) throw new Error("Error updating feedback");
      } else {
        const response = await fetch(API_URL_FULL, {
          method: "POST",
          body: form,
        });
        if (!response.ok) throw new Error("Error adding feedback");
      }
      fetchFeedbacks();
      setShowModal(false);
      resetForm();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (fb) => {
    setFormData({
      name: fb.name,
      text: fb.text,
      date: fb.date,
      img: null, // Don't set existing image, allow replacement
    });
    setEditingId(fb._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL_FULL}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error deleting feedback");
        fetchFeedbacks();
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: "", text: "", date: "", img: null });
    setEditingId(null);
  };

  return (
    <div className="admin-feedback-page">
      <h1 className="text-center">Feedback Management</h1>
      <div className="text-end p-3">
        <Button variant="primary" onClick={() => { resetForm(); setShowModal(true); }}>
          <FontAwesomeIcon icon={faPlus} /> New Feedback
        </Button>
      </div>
      {loading && <p>Loading...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="text-center">
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Text</th>
                <th>Date</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {feedbacks.map((fb, idx) => (
                <tr key={fb._id}>
                  <td>{idx + 1}</td>
                  <td>{fb.name}</td>
                  <td>{fb.text}</td>
                  <td>{fb.date}</td>
                  <td>
                    {fb.img && (
                      <img
                        style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "50%" }}
                        src={fb.img.startsWith("http") ? fb.img : `${API_URL}/${fb.img.replace(/\\/g, "/")}`}
                        alt={fb.name}
                      />
                    )}
                  </td>
                  <td>
                    <button className="btn btn-warning mx-1" onClick={() => handleEdit(fb)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn btn-danger mx-1" onClick={() => handleDelete(fb._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>{editingId ? "Update Feedback" : "Add New Feedback"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control rounded-pill shadow-sm"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter customer name"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Feedback</label>
              <textarea
                name="text"
                className="form-control rounded-4 shadow-sm"
                value={formData.text}
                onChange={handleInputChange}
                required
                placeholder="Write feedback here..."
                rows={3}
                style={{ resize: "vertical" }}
              />
            </div>
            <div className="row g-2">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control rounded-pill shadow-sm"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Image {editingId ? "(Upload new to replace)" : ""}</label>
                <input
                  type="file"
                  name="img"
                  className="form-control shadow-sm"
                  onChange={handleInputChange}
                  required={!editingId}
                  accept="image/*"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <Button type="submit" variant="success" className="px-4 rounded-pill shadow" disabled={loading}>
                {loading ? (
                  <span>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Saving...
                  </span>
                ) : editingId ? "Update Feedback" : "Add Feedback"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminFedbackTable;
