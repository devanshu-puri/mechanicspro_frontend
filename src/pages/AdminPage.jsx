import "../Styles/Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faCreditCard,
    faEnvelope,
    faSignOut,
    faLocationArrow,
    faWarehouse,
    faFeed,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

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
            id: 2,
            icon: faLocationArrow,
            title: "Manage Zones",
            description: "Add, update, or delete Zones and manage inventory.",
            path: "/admin/zone"
        },
        {
            id: 3,
            icon: faWarehouse,
            title: "Manage Garage",
            description: "Add, update, or delete Garage and manage inventory.",
            path: "/admin/grage"
        },
           {
            id: 4,
            icon: faCreditCard,
            title: "Manage Booking",
            description: "Manage the Garage Booking and the payment.",
            path: "/admin/payments"
        },
        {
            id: 5,
            icon: faEnvelope,
            title: "Manage Contacts",
            description: "Handle contact inquiries and user communication channels.",
            path: "/admin/contacts"
        },
        {
            id: 6,
            icon: faComment,
            title: "Manage Feedbacks",
            description: "View, add, update, or delete customer feedbacks.",
            path: "/admin/feedbacks"
        }
    ];

    return (
        <><Header /><div className="admin-container">
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
        </div></>
    );
}

export default Admin;