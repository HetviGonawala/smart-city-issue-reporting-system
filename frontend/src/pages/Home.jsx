import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../context/AuthContext"
import {
  FaRoad,
  FaLightbulb,
  FaTrash,
  FaTint,
  FaTrafficLight,
  FaTree,
} from "react-icons/fa";

function Home() {

  const { token ,user } = useContext(AuthContext);

  const cards = [
  {
    icon: <FaRoad />,
    title: "Road Damage",
    value: "Report potholes, damaged roads, cracks, and unsafe road conditions.",
  },
  {
    icon: <FaLightbulb />,
    title: "Street Lights",
    value: "Report broken, flickering, or non-functional street lights in your area.",
  },
  {
    icon: <FaTrash />,
    title: "Garbage Collection",
    value: "Report overflowing bins, uncollected garbage, and illegal dumping.",
  },
  {
    icon: <FaTint />,
    title: "Water Supply",
    value: "Report water leakage, pipeline damage, low water pressure, or supply issues.",
  },
  {
    icon: <FaTrafficLight />,
    title: "Traffic Signals",
    value: "Report malfunctioning traffic lights, damaged signs, and road signal issues.",
  },
  {
    icon: <FaTree />,
    title: "Parks & Public Spaces",
    value: "Report damaged park equipment, poor maintenance, or cleanliness issues in public spaces.",
  },
];


  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #06b6d4)",
          color: "white",
          padding: "45px 30px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          Smart City Issue Reporting System
        </h1>
        
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
         Report civic issues, upload supporting images, 
         and track complaint progress with ease.
        </p>

        <div 
          className="hero-buttons" 
          style={{ marginTop: "30px"}}>
          {!token && ( 
          <Link to="/register">
            <button
              style={{
                padding: "12px 25px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                marginRight: "10px",
                background: "white",
                color: "#2563eb",
                fontWeight: "bold",
              }}
            > 
              Get Started
              <i className="fa-solid fa-arrow-right" style={{color:"#2563eb", marginLeft:"0.5rem"}}></i>
            </button>
          </Link>
          )}

          {user && token && user.role == "user" && (
          <Link to="/report-issue">
          <button
              style={{
              padding: "12px 25px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              marginLeft: "10px",
              background: "#0f172a",
              color: "white",
            }}
          >
          Report Issue
          <i className="fa-solid fa-arrow-right" style={{color:"white", marginLeft:"0.5rem"}}></i>
          </button>
          </Link>
          )}

        {user && token && user.role == "admin" && (
        <Link to="/admin/dashboard">
            <button
              style={{
                padding: "12px 25px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                background: "white",
                color: "#2563eb",
                marginLeft:"1rem"
              }}
            >
              Go To DashBoard
              <i className="fa-solid fa-arrow-right" style={{color:"#2563eb", marginLeft:"0.5rem"}}></i>
            </button>
          </Link>
          )}
        </div>
      </div>

      {/* Statistics */}
      <h2 
        className="section-title"
        style={{ marginBottom: "20px" }}>
        Popular Complaint Categories
      </h2>

      <div
        className="category-grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              minHeight: "220px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                color: "#2563eb",
                marginBottom: "15px",
              }}
            >
              {card.icon}
            </div>

            <h2
              className="card-title"
              style={{
                color: "black",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h2>

            <p style={{lineHeight: "1.6"}}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <h2
        className="section-title"
        style={{
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        Why Use This Platform?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3 className="card-title" style={{marginBottom:"0.5rem"}}><i className="fa-solid fa-camera"
                 style={{ color: "#2563eb" , marginRight:"0.75rem"}}>
              </i> 
              Image Upload
          </h3>

          <p style={{lineHeight: "1.4"}}>
            Upload images to provide proof and
            improve issue verification.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3  className="card-title" style={{marginBottom:"0.5rem"}}><i className="fa-solid fa-chart-simple" 
                  style={{color:"#2563eb", marginRight:"0.75rem"}}>
              </i>
              Live Status Tracking
          </h3>

          <p style={{lineHeight: "1.4"}}>
            Track complaint progress from submission
            to resolution.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3 className="card-title" style={{marginBottom:"0.5rem"}}><i className="fa-solid fa-lock" 
              style={{color:" #2563eb", marginRight:"0.75rem"}}>
            </i>
            Secure & Private
          </h3>

          <p style={{lineHeight: "1.4"}}>
            Users can access only their own complaints, ensuring privacy and security.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;