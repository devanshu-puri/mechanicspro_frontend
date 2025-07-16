import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form } from "react-bootstrap";
import { API_URL } from "../Api/Apiurl"; // Import API URLs from config

const AdminGarageTable = () => {
  const [garages, setGarages] = useState([]);
  const [zones, setZones] = useState([]);
  const [formData, setFormData] = useState({
    zone: "",
    GarageMainImage: null,
    GarageImage: [],
    GarageName: "",
    GarageLocation: "",
    GarageServices: [{ ServiceName: "", ServicePrice: "", ServiceImage: null }],
  });
  const [serviceImagesFiles, setServiceImagesFiles] = useState([]); // to hold service image files for upload
  const [editingGarageId, setEditingGarageId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const GARAGES_API_URL = `${API_URL}/api/garages`;
  const ZONES_API_URL = `${API_URL}/api/zones`;

  const fetchZones = useCallback(async () => {
    try {
      const res = await fetch(ZONES_API_URL);
      const data = await res.json();
      setZones(data);
    } catch (err) {
      console.error("Error fetching zones:", err);
    }
  }, [ZONES_API_URL]);

  const fetchGarages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(GARAGES_API_URL);
      const data = await res.json();
      setGarages(data);
    } catch (err) {
      console.error("Error fetching garages:", err);
    }
    setLoading(false);
  }, [GARAGES_API_URL]);

  useEffect(() => {
    fetchZones();
    fetchGarages();
  }, [fetchZones, fetchGarages]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "GarageMainImage") {
      setFormData({ ...formData, GarageMainImage: files[0] });
    } else if (name === "GarageImage") {
      setFormData({ ...formData, GarageImage: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleServiceChange = (index, e) => {
    const { name, value, files } = e.target;
    const newServices = [...formData.GarageServices];
    if (name === "ServiceImage") {
      newServices[index].ServiceImage = files[0]; // file object
      // Update serviceImagesFiles array
      const newServiceImagesFiles = [...serviceImagesFiles];
      newServiceImagesFiles[index] = files[0];
      setServiceImagesFiles(newServiceImagesFiles);
    } else {
      newServices[index][name] = value;
    }
    setFormData({ ...formData, GarageServices: newServices });
  };

  const addService = () => {
    setFormData({
      ...formData,
      GarageServices: [
        ...formData.GarageServices,
        { ServiceName: "", ServicePrice: "", ServiceImage: null },
      ],
    });
    setServiceImagesFiles([...serviceImagesFiles, null]);
  };

  const removeService = (index) => {
    const newServices = [...formData.GarageServices];
    newServices.splice(index, 1);
    setFormData({ ...formData, GarageServices: newServices });
    const newServiceImagesFiles = [...serviceImagesFiles];
    newServiceImagesFiles.splice(index, 1);
    setServiceImagesFiles(newServiceImagesFiles);
  };

  const resetForm = () => {
    setFormData({
      zone: "",
      GarageMainImage: null,
      GarageImage: [],
      GarageName: "",
      GarageLocation: "",
      GarageServices: [
        { ServiceName: "", ServicePrice: "", ServiceImage: null },
      ],
    });
    setServiceImagesFiles([]);
    setEditingGarageId(null);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const formPayload = new FormData();

      formPayload.append("zone", formData.zone);
      formPayload.append("GarageName", formData.GarageName);
      formPayload.append("GarageLocation", formData.GarageLocation);

      if (formData.GarageMainImage) {
        formPayload.append("GarageMainImage", formData.GarageMainImage);
      }

      formData.GarageImage.forEach((file) => {
        formPayload.append("GarageImage", file);
      });

      // Convert GarageServices array to JSON string (without ServiceImage files)
      // ServiceImages will be uploaded separately
      const servicesWithoutImages = formData.GarageServices.map(
        ({ ServiceImage, ...rest }) => rest
      );
      formPayload.append(
        "GarageServices",
        JSON.stringify(servicesWithoutImages)
      );

      // Append service images files in order as ServiceImages[]
      serviceImagesFiles.forEach((file) => {
        if (file) formPayload.append("ServiceImages", file);
      });

      let response;
      if (editingGarageId) {
        response = await fetch(`${GARAGES_API_URL}/${editingGarageId}`, {
          method: "PUT",
          body: formPayload,
        });
      } else {
        response = await fetch(GARAGES_API_URL, {
          method: "POST",
          body: formPayload,
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error saving garage");
      }

      await fetchGarages();
      resetForm();
      setShowModal(false);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  const handleEdit = (garage) => {
    setEditingGarageId(garage._id);
    setFormData({
      zone: garage.zone,
      GarageMainImage: null,
      GarageImage: [],
      GarageName: garage.GarageName,
      GarageLocation: garage.GarageLocation,
      GarageServices: garage.GarageServices.map((s) => ({
        ServiceName: s.ServiceName,
        ServicePrice: s.ServicePrice,
        ServiceImage: null, // reset file input, can't prefill files
      })),
    });
    setServiceImagesFiles(new Array(garage.GarageServices.length).fill(null));
    setShowModal(true);
    setErrorMessage("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this garage?")) return;
    try {
      const res = await fetch(`${GARAGES_API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchGarages();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-5 mt-4">
      <h2>Admin Garage Management</h2>
      <Button
        variant="primary"
        onClick={() => {
          resetForm();
          setShowModal(true);
        }}
      >
        Add New Garage
      </Button>
      <hr />

      {loading && <p>Loading...</p>}

      {!loading && (
        <table className="table table-striped table-bordered mt-3">
          <thead className="text-center">
            <tr>
              <th>Zone</th>
              <th>Garage Name</th>
              <th>Location</th>
              <th>Main Image</th>
              <th>Gallery</th> {/* New Column */}
              <th>Services</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {garages.map((garage) => (
              <tr key={garage._id}>
                <td>{garage.zone}</td>
                <td>{garage.GarageName}</td>
                <td
                  style={{
                    width: "150px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <a
                    href={garage.GarageLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Map Link
                  </a>
                </td>

                <td>
                  {garage.GarageMainImage ? (
                    <img
                      src={`${API_URL}/${garage.GarageMainImage}`}
                      alt="Main"
                      style={{
                        width: "80px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      }}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>
                  {/* Garage Image Gallery as Table */}
                  {garage.GarageImage && garage.GarageImage.length > 0 ? (
                    <table
                      className="table table-sm table-bordered mb-0"
                      style={{ minWidth: "100px" }}
                    >
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: "30px" }}>S.No</th>
                          <th>Image</th>
                        </tr>
                      </thead>
                      <tbody>
                        {garage.GarageImage.map((imgSrc, idx) => (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>
                              <img
                                src={`${API_URL}/${imgSrc}`}
                                alt={`Garage Img ${idx + 1}`}
                                style={{
                                  width: "60px",
                                  height: "45px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                  boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                                }}
                                title={`Image ${idx + 1}`}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <span style={{ color: "#888", fontSize: "0.9rem" }}>
                      No Images
                    </span>
                  )}
                </td>

                <td>
                  <table
                    className="table table-sm table-bordered mb-0"
                    style={{ minWidth: "250px" }}
                  >
                    <thead className="table-light">
                      <tr>
                        <th>Sl No</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {garage.GarageServices.map((service, idx) => (
                        <tr key={idx}>
                          <td>{idx+1}</td>
                          <td>{service.ServiceName}</td>
                          <td>${service.ServicePrice}</td>
                          <td>
                            {service.ServiceImage ? (
                              <img
                                src={`${API_URL}/${service.ServiceImage}`}
                                alt={service.ServiceName}
                                style={{
                                  width: "50px",
                                  height: "40px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                              />
                            ) : (
                              <span
                                style={{ fontSize: "0.85rem", color: "#888" }}
                              >
                                No Image
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>

                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(garage)}
                    className="me-2"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(garage._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal for Add/Edit */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editingGarageId ? "Edit Garage" : "Add New Garage"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Zone</Form.Label>
              <Form.Select
                required
                name="zone"
                value={formData.zone}
                onChange={handleInputChange}
              >
                <option value="">Select Zone</option>
                {zones.map((zone, idx) => (
                  <option key={idx} value={zone.zoneName}>
                    {zone.zoneName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Garage Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="GarageName"
                value={formData.GarageName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Garage Location</Form.Label>
              <Form.Control
                required
                type="text"
                name="GarageLocation"
                value={formData.GarageLocation}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Main Garage Image</Form.Label>
              <Form.Control
                type="file"
                name="GarageMainImage"
                accept="image/*"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Garage Images (Multiple)</Form.Label>
              <Form.Control
                type="file"
                name="GarageImage"
                accept="image/*"
                multiple
                onChange={handleInputChange}
              />
            </Form.Group>

            <hr />
            <h5>Garage Services</h5>

            {formData.GarageServices.map((service, index) => (
              <div key={index} className="border p-3 mb-3 rounded">
                <Form.Group className="mb-2">
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="ServiceName"
                    value={service.ServiceName}
                    onChange={(e) => handleServiceChange(index, e)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Service Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="ServicePrice"
                    value={service.ServicePrice}
                    onChange={(e) => handleServiceChange(index, e)}
                    required
                    min={0}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Service Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="ServiceImage"
                    accept="image/*"
                    onChange={(e) => handleServiceChange(index, e)}
                  />
                </Form.Group>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeService(index)}
                  disabled={formData.GarageServices.length === 1}
                >
                  <FontAwesomeIcon icon={faMinus} /> Remove Service
                </Button>
              </div>
            ))}

            <Button variant="success" size="sm" onClick={addService}>
              <FontAwesomeIcon icon={faPlus} /> Add Service
            </Button>

            <div className="mt-4 text-end">
              <Button
                variant="secondary"
                onClick={() => setShowModal(false)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminGarageTable;
