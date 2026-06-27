import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";


function ComplaintDetails() {
  const { id } = useParams();

  const [complaint,setComplaint] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchComplaint = async()=>{
    console.log("unique issue route");
    try{
      const res = await axios.get(`http://localhost:5000/api/issues/${id}`,
        {
          headers: {
            Authorization : `Bearer ${token}`,
          }
        }
      );
      console.log(res.data);
      setComplaint(res.data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchComplaint();
  },[]);

  if (!complaint) {
    return <h2>Complaint not found</h2>;
  }

  const deleteComplaint = async(id) =>{
    console.log("delete route");
    try{
      const res = await axios.delete(`http://localhost:5000/api/issues/${id}`,
        {
          headers: {
            Authorization : `Bearer ${token}`,
          }
        }
      )
      console.log(res.data);
      alert(res.data.message);
      navigate(`/myissues`);
    } catch(err){
      console.log(err.response.data);
    }
  }

  return (
    <div
  style={{
    maxWidth: "800px",
    margin: "40px auto",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",

  }}
  >
      {/* <h1 style={{margin:"1rem 0"}}>Complaint Details</h1> */}


      <h2 style={{margin: "1rem 0"}}>{complaint.title}</h2>
      <br />

      {complaint.image.url && (
      <img style={{
        marginBottom: "1rem",
        borderRadius:"1rem"
      }}
        src={complaint.image.url}
        alt="Issue"
        width="80%"
        height="180vh"
  />
  
)}
      <p>
        <b>Category:</b> {complaint.category}
      </p>
      <br />
      <p>
        <strong>Description:</strong> {complaint.description}
      </p>
      <br />
      <p>
        <strong>Status:</strong>
        <span
          style={{
            color:
              complaint.status === "Resolved"
                ? "green"
                : complaint.status === "Pending"
                ? "red"
                : "blue",
            marginLeft: "5px",
            fontWeight: "bold",
          }}
        >
          {complaint.status}
        </span>
      </p>
      <br />
      <p>
        <strong>Location:</strong> {complaint.location}
      </p>
      <br />
      <p>
          <strong>Created At:</strong>{" "}
          {new Date(complaint.createdAt).toLocaleString()}
      </p>
          <br />
      <br />
    <Link to={`/issues/${id}/edit`}>
      <button style={{
                padding: "6px 12px",
                width: "10%",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                marginRight: "10px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                marginBottom:"1rem",
              }}>
        Edit
      </button>
      </Link>
      <button 
          onClick={()=> deleteComplaint(complaint._id)}
          style={{
                padding: "6px 12px",
                width: "10%",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                marginRight: "10px",
                background: "#2563eb",
                color: "white",
                fontWeight: "bold",
                marginBottom:"1rem",
              }}>
        Delete
      </button>
    </div>
  );
}

export default ComplaintDetails;