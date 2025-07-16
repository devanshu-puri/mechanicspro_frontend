import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { API_URL } from '../Api/Apiurl';

const AdminZoneTable = () => {
  const [zones, setZones] = useState([]);
  const [formData, setFormData] = useState({
    zoneName: "",
    zoneImage: null,
  });
  const [editingZoneId, setEditingZoneId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const UserEmail = localStorage.getItem("email");

  const API_URL_FULL = `${API_URL}/api/zones`;

  const fetchZones = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL_FULL);
      if (!response.ok) {
        throw new Error("Error fetching zones");
      }
      const data = await response.json();
      setZones(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }, [API_URL_FULL]);

  useEffect(() => {
    fetchZones();
  }, [fetchZones]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "zoneImage") {
      setFormData({ ...formData, zoneImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("zoneName", formData.zoneName);
    form.append("uploadedBy", UserEmail); 
    if (formData.zoneImage) form.append("zoneImage", formData.zoneImage);

    setLoading(true);
    try {
      if (editingZoneId) {
        const response = await fetch(`${API_URL_FULL}/${editingZoneId}`, {
          method: "PUT",
          body: form,
        });
        if (!response.ok) {
          throw new Error("Error updating zone");
        }
      } else {
        const response = await fetch(API_URL_FULL, {
          method: "POST",
          body: form,
        });
        if (!response.ok) {
          throw new Error("Error adding zone");
        }
      }
      fetchZones();
      setShowModal(false);
      resetForm();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (zone) => {
    setFormData({
      zoneName: zone.zoneName,
      zoneImage: null, // We don't set the existing image here to allow replacement
    });
    setEditingZoneId(zone._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this zone?")) {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL_FULL}/${id}`, { method: "DELETE" });
        if (!response.ok) {
          throw new Error("Error deleting zone");
        }
        fetchZones();
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      zoneName: "",
      zoneImage: null,
    });
    setEditingZoneId(null);
  };

  return (
    <div className="admin-zone-page">
      <h1 className="text-center">Zone Management</h1>
      <div className="text-end p-3">
        <Button variant="primary" onClick={() => { resetForm(); setShowModal(true); }}>
          <FontAwesomeIcon icon={faPlus} /> New Zone
        </Button>
      </div>

      {/* Loading and Error Messages */}
      {loading && <p>Loading...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      {/* Table for Zones */}
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="text-center">
              <tr>
                <th>Sl No</th>
                <th>Zone Name</th>
                <th>Zone Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {zones.map((zone, index) => (
                <tr key={zone._id}>
                  <td>{index + 1}</td>
                  <td>{zone.zoneName}</td>
                  <td>
                    {zone.zoneImage && (
                      <img
                        style={{
                          width: "100px",
                          height: "auto",
                          objectFit: "cover",
                        }}
                        src={`${API_URL}/${zone.zoneImage}`}
                        alt={zone.zoneName}
                      />
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning mx-1"
                      onClick={() => handleEdit(zone)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => handleDelete(zone._id)}
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

      {/* Modal for Adding or Editing a Zone */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingZoneId ? "Update Zone" : "Add New Zone"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Zone Name</label>
              <input
                type="text"
                name="zoneName"
                className="form-control"
                value={formData.zoneName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Zone Image {editingZoneId ? "(Upload new to replace)" : ""}</label>
              <input
                type="file"
                name="zoneImage"
                className="form-control-file"
                onChange={handleInputChange}
                required={!editingZoneId} // Required only for new zones
              />
            </div>

            <div className="form-group mt-3">
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Saving..." : editingZoneId ? "Update Zone" : "Add Zone"}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminZoneTable;