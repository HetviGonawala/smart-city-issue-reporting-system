import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
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
        style={{
          color: "white",
          margin: 0,
          fontSize: "24px",
        }}
      >
        🏙 Smart City Reporter
      </h2>

      {/* Links */}
      <div
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

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>

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
      </div>
    </nav>
  );
}

export default Navbar;