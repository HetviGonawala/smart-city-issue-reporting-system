import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"
import { toast } from "react-toastify";

function ComplaintDetails() {
  const { id } = useParams();
  const { token, user } = useContext(AuthContext);

  const [complaint,setComplaint] = useState(null);
  const navigate = useNavigate();

  const fetchComplaint = async()=>{
    try{
      const res = await axios.get(`http://localhost:5000/api/issues/${id}`,
        {
          headers: {
            Authorization : `Bearer ${token}`,
          }
        }
      );
      setComplaint(res.data);
    } catch(err){
      toast.error(err.response.data.message);
    }
  }

  useEffect(()=>{
    fetchComplaint();
  },[]);

  if (!complaint) {
    return <h2>Complaint not found</h2>;
  }

  const deleteComplaint = async(id) =>{

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this complaint?"
    )
    if(!confirmDelete) return;
    
    try{
      const res = await axios.delete(`http://localhost:5000/api/issues/${id}`,
        {
          headers: {
            Authorization : `Bearer ${token}`,
          }
        }
      )
      
      toast.success(res.data.message);
      navigate(`/myissues`);
    } catch(err){
      toast.error(err.response.data.message);
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

    <h2 style={{marginBottom:"1.5rem", marginTop:"1rem"}}>{complaint.title}</h2>
      
    {complaint.image && complaint.image.url && (
      <img style={{
        marginBottom: "1rem",
        borderRadius:"1rem"
      }}
        src={complaint.image.url}
        alt="Issue"
        width="90%"
        height="260px"
      />
      )}

      <p style={{marginBottom: "1rem"}}>
        <b>Hosted By:</b>&nbsp; {complaint.createdBy.username}
      </p>

      <p style={{marginBottom: "1rem"}}>
        <b>Category:</b>&nbsp; {complaint.category}
      </p>
      
      <p style={{marginBottom: "1rem"}}>
        <strong>Description:</strong>&nbsp; {complaint.description}
      </p>
     
      <p style={{marginBottom: "1rem"}}>
        <strong>Status:</strong>&nbsp;
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
      
      <p style={{marginBottom: "1rem"}}>
        <strong>Location:</strong>&nbsp; {complaint.location}
      </p>
      
      <p style={{marginBottom: "1.5rem"}}>
          <strong>Created At:</strong>&nbsp;{" "}
          {new Date(complaint.createdAt).toLocaleString()}
      </p>
          
      {token && user.role !== "admin" && (
      <>
        <Link to={`/issues/${id}/edit`}>
          <button 
            style={{
                padding: "6px 12px",
                width: "30%",
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
            width: "30%",
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
      </>
      )}

      {token && user.role == "admin" && (
      <Link to={`/manage-issues`}>
        <button
          style={{
            padding: "6px 12px",
            width: "30%",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            marginRight: "10px",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
            marginBottom:"1rem",
          }}
        >
          <i className="fa-solid fa-arrow-left" style={{color:"white", marginRight:"0.5rem"}}></i>
          Back
        </button>
      </Link>
      )}
    </div>
  );
}

export default ComplaintDetails;