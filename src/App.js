import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import { FavoritesProvider } from './context/FavoritesContext';
import GarageDetails from './pages/GarageDetails';
import ConfirmBooking from './pages/ConfirmBooking';
import PaymentQR from './pages/PaymentQR';
import AreaPage from './pages/AreaPage';
import Services from './pages/Services.jsx';
import AdminPage from './pages/AdminPage.jsx';
import AdminPaymentsPage from './pages/AdminPaymentsPage.jsx';
import AdminContactTable from './pages/AdminContactTable.jsx';
import AdminUserTable from './pages/AdminUserTable.jsx';
import AdminZoneTable from './pages/AdminZoneTable.jsx';
import AdminGarageTable from './pages/AdminGarageTable.jsx';
import AdvancedBookingForm from './components/AdvancedBookingForm.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Admin from './pages/AdminPage.jsx';
import AdminFedbackTable from './pages/AdminFedbackTable.jsx';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar /> {/* ✅ ONLY instance */}
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/area/:areaName/:imgUrl" element={<AreaPage />} />
            <Route path="/garage/:id" element={<GarageDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/book" element={<AdvancedBookingForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
            <Route path="/paymentqr" element={<PaymentQR />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Admin />} />
            <Route path="/admin/payments" element={<AdminPaymentsPage />} />
            <Route path="/admin/users" element={<AdminUserTable />} />
            <Route path="/admin/contacts" element={<AdminContactTable />} />
            <Route path="/admin/zone" element={<AdminZoneTable />} />
            <Route path="/admin/grage" element={<AdminGarageTable />} />
            <Route path="/admin/feedbacks" element={<AdminFedbackTable />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
