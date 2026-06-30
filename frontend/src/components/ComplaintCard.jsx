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
          padding: "15px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          background: "white",
          display: "flex",
          flexDirection: "column",
          minHeight: "220px",
        }}
    >
      <h3 style={{marginBottom: "1rem"}}>{title}</h3>
      
      <p style={{marginBottom: "1rem"}}>
        <strong>Category:</strong>&nbsp; {category}
      </p>
     
      <p style={{marginBottom: "1rem"}}>
        <strong>Status: </strong>

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
      
      <Link 
        to={`/issues/${id}`}
         style={{
            marginTop: "auto",
            textDecoration: "none",
          }}
        >
          <button
            style={{
                padding: "6px 12px",
                width: "100%",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                marginRight: "10px",
                background: "black",
                color: "white",
                fontWeight: "bold",
                // marginBottom:"1rem",
                marginTop:"auto",
              }}
          >View Details</button>
        </Link>
    </div>
  );
}

export default ComplaintCard;