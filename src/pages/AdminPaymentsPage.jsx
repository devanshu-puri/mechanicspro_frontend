import React, { useState, useEffect } from "react";
import "admin-lte/dist/css/adminlte.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../Api/Apiurl"; // Adjust the import path as necessary

function AdminPaymentsPage() {
    const [payments, setPayments] = useState([]);

    // Fetch all payments
    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`${API_URL}/api/payments`);
                const data = await response.json();
                setPayments(data);
            } catch (err) {
                console.error("Error fetching payments:", err);
            }
        };
        fetchPayments();
    }, [API_URL]);

    // Delete a payment
    const handleDeletePayment = async (id) => {
        try {
            const response = await fetch(`${API_URL}/api/payments/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setPayments(payments.filter((p) => p._id !== id));
            } else {
                console.error("Failed to delete payment");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    // Change payment status
    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`${API_URL}/api/payments/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                const updatedPayment = await response.json();
                setPayments((prev) =>
                    prev.map((p) => (p._id === id ? { ...p, status: updatedPayment.status } : p))
                );
            } else {
                console.error("Failed to update status");
            }
        } catch (err) {
            console.error("Error updating status:", err);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-center mb-4">Admin Payments Page</h2>
            <div className="card">
                <div className="card-body">
                    <table className="table table-bordered table-hover text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Car Model</th>
                                <th>Garage Name</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Transaction ID</th>
                                <th>QR Code</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr key={payment._id}>
                                    <td>{payment.name}</td>
                                    <td>{payment.email}</td>
                                    <td>{payment.carModel}</td>
                                    <td>{payment.garage}</td>
                                    <td>{payment.service}</td>
                                    <td>₹{payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>
                                        {payment.qrCodeImage && (
                                            <img
                                                src={`${API_URL}/uploads/${payment.qrCodeImage}`}
                                                alt="QR Code"
                                                style={{ width: "100px", height: "auto" }}
                                            />
                                        )}
                                    </td>
                                    <td>
                                        <select
                                            style={{ textAlign: "center" }}
                                            className={`form-select ${
                                                payment.status === "Approved"
                                                    ? "bg-success text-white"
                                                    : payment.status === "Rejected"
                                                    ? "bg-danger text-white"
                                                    : "bg-warning"
                                            }`}
                                            value={payment.status}
                                            onChange={(e) =>
                                                handleStatusChange(payment._id, e.target.value)
                                            }
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Approved">Approved</option>
                                            <option value="Rejected">Rejected</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDeletePayment(payment._id)}
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
}

export default AdminPaymentsPage;
