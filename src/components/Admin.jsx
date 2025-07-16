import "../Styles/Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faBook,
    faCreditCard,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    const adminTasks = [
        {
            id: 1,
            icon: faUsers,
            title: "Manage Users",
            description: "Create, update, or remove user accounts and manage roles.",
            path: "/admin/users"
        },
        {
            id: 3,
            icon: faBook,
            title: "Manage Courses",
            description: "Add new courses, update content, or delete existing ones.",
            path: "/admin/courses"
        },
        {
            id: 4,
            icon: faCreditCard,
            title: "Manage Payments",
            description: "Track and manage user payments and subscription status.",
            path: "/admin/payments"
        },
        {
            id: 6,
            icon: faEnvelope,
            title: "Manage Contacts",
            description: "Handle contact inquiries and user communication channels.",
            path: "/admin/contacts"
        },
    ];

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="admin-card-wrapper">
                {adminTasks.map((task) => (
                    <div className="admin-card" key={task.id}>
                        <div className="admin-icon">
                            <FontAwesomeIcon icon={task.icon} size="3x" />
                        </div>
                        <h2 className="admin-title">{task.title}</h2>
                        <p className="admin-description">{task.description}</p>
                        <div className="admin-button">
                            <button onClick={() => navigate(task.path)}>Manage</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
