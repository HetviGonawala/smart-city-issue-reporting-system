import { Link } from "react-router-dom";
function ComplaintCard({
  id,
  title,
  category,
  status,
}) {
  return (
    <div
      style={{
  border: "1px solid #ddd",
  borderRadius: "10px",
  width: "30%",
  padding: "15px",
  margin: "15px 2rem",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  }}
    >
      <h3>{title}</h3>
      <br />
      <p>
        <strong>Category:</strong> {category}
      </p>
      <br />
      <p>
  <strong>Status:</strong>

  <span
    style={{
      color:
        status === "Resolved"
          ? "green"
          : status === "Pending"
          ? "red"
          : "blue",
      marginLeft: "5px",
    }}
  >
    {status}
  </span>
</p>
    <br />
      <Link to={`/issues/${id}`}>
  <button
      style={{
                padding: "6px 12px",
                width: "50%",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                marginRight: "10px",
                background: "black",
                color: "white",
                fontWeight: "bold",
                marginBottom:"1rem",
              }}
  >View Details</button>
</Link>
    </div>
  );
}

export default ComplaintCard;