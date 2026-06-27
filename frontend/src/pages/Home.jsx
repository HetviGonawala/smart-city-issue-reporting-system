import { Link } from "react-router-dom";

function Home() {
  const stats = [
    { title: "Total Issues", value: 150 },
    { title: "Pending", value: 45 },
    { title: "In Progress", value: 35 },
    { title: "Resolved", value: 70 },
  ];

  const recentIssues = [
    {
      title: "Pothole Near College",
      status: "Pending",
    },
    {
      title: "Garbage Overflow",
      status: "Resolved",
    },
    {
      title: "Broken Street Light",
      status: "In Progress",
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
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #06b6d4)",
          color: "white",
          padding: "60px 30px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        <h1
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
          Report civic issues, track complaint status,
          and help authorities improve your city through
          a transparent and efficient reporting platform.
        </p>

        <div style={{ marginTop: "30px" }}>
          <Link to="/report-issue">
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
              Report Issue
            </button>
          </Link>

          <Link to="/login">
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
    Login
  </button>
</Link>

          <Link to="/myissues">
            <button
              style={{
                padding: "12px 25px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                background: "#0f172a",
                color: "white",
                marginLeft:"1rem"
              }}
            >
              View Issues
            </button>
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <h2 style={{ marginBottom: "20px" }}>
        City Statistics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h1
              style={{
                color: "#2563eb",
                marginBottom: "10px",
              }}
            >
              {item.value}
            </h1>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Recent Complaints */}
      <h2 style={{ marginBottom: "20px" }}>
        Recent Complaints
      </h2>

      {recentIssues.map((issue) => (
        <div
          key={issue.title}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h3>{issue.title}</h3>

          <p>
            Status:{" "}
            <span
              style={{
                fontWeight: "bold",
                color:
                  issue.status === "Resolved"
                    ? "green"
                    : issue.status === "Pending"
                    ? "red"
                    : "blue",
              }}
            >
              {issue.status}
            </span>
          </p>
        </div>
      ))}

      {/* Features */}
      <h2
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
          <h3>📍 Location Based Reporting</h3>

          <p>
            Report issues with exact location
            information.
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
          <h3>📷 Image Upload</h3>

          <p>
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
          <h3>📊 Live Status Tracking</h3>

          <p>
            Track complaint progress from submission
            to resolution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;