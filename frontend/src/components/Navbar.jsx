import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function Navbar() {

  const navigate = useNavigate();

  const { token, logout, user } = useContext(AuthContext);

  const handleLogout = () =>{
    logout();
    toast.success("You are Logged Out Successfully");
    navigate("/");
  }
  
  return (
    <nav className="navbar-container"
      style={{
        background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <h2
        className="navbar-logo"
        style={{
          color: "white",
          margin: 0,
          fontSize: "24px",
        }}
      >
        <i className="fa-solid fa-city" style={{marginRight:"0.75rem"}}></i>Smart City Reporter
      </h2>

      {/* Links */}
      <div
        className="navbar-links"
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        {!token && (
        <>
        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          SignUp
        </Link>
      

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
        </>
        )}
        
        {user && token && user.role == "user" && (
        <>
        <Link
          to="/report-issue"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Report Issue
        </Link>

        <Link
          to="/myissues"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          My Issues
        </Link>
        </>
        )}

        {user && token && user.role == "admin" && (
        <>
        <Link
          to="/admin/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/manage-issues"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Manage Issues
        </Link>
        </>
        )}

        {token && (
        <button
          onClick = {handleLogout}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
            textDecoration: "none",
          }}>
          LogOut
        </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;