import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportIssue from "./pages/ReportIssue";
import MyComplaints from "./pages/MyComplaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import EditReportIssue from "./pages/EditReportIssue"
import AdminDashboard from "./pages/AdminDashboard";
import ManageComplaints from "./pages/ManageComplaints";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/myissues" element={<MyComplaints />} />
          <Route path="/issues/:id" element={<ComplaintDetails />} />
          <Route path="/issues/:id/edit" element={<EditReportIssue />}/>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
              <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-issues"
            element={
              <ProtectedRoute>
              <ManageComplaints />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;