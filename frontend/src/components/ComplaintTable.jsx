import React,{useState, useContext} from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ComplaintTable({ complaints, setComplaints }) {

  const [status, setStatus] = useState({});
  const { token } = useContext(AuthContext);

  const updateComplaint = async(id)=>{
    try{
        const res = await axios.put(`http://localhost:5000/api/admin/complaints/${id}/status`,{
         status: status[id],
    },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    toast.success(res.data.message);

    setComplaints((prev) =>
        prev.map((c) =>
            c._id === id ? res.data.complaint : c
        )
    );
    } catch(err){
      toast.error(err.response.data.message);
    }
  }

  const deleteComplaint = async(id) =>{
    const confirmDelete = window.confirm(
                "Are you sure you want to delete this complaint?"
    );

  if (!confirmDelete) return;

      try{
        const res = await axios.delete(`http://localhost:5000/api/admin/complaint/${id}`,
          {
            headers:{
              Authorization: `Bearer ${token}`,
            }
          }
        )
        toast.success(res.data.message);
      } catch(err){
        toast.error(er.response.data.message);
      }
      setComplaints((prev) =>
          prev.filter((c) => c._id !== id)
      );
  }

  return (
    <table 
      style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          }}
    >
    <thead>
    <tr>
      <th style={{ backgroundColor: "#f5f5f5", padding: "10px" ,color:"black"}}>
        User Name
      </th>

      <th style={{ backgroundColor: "#f5f5f5", padding: "10px",color:"black"}}>
        Location
      </th>

      <th style={{ backgroundColor: "#f5f5f5", padding: "10px",color:"black" }}>
        Category
      </th>

      <th style={{ backgroundColor: "#f5f5f5", padding: "10px" ,color:"black"}}>
        Status
      </th>

      <th style={{ backgroundColor: "#f5f5f5", padding: "10px",color:"black" }}>
        Action
      </th>

      <th style={{ backgroundColor: "#f5f5f5", padding: "10px",color:"black" }}>
        View Details
      </th>

      <th style={{ backgroundColor: "#f5f5f5", padding: "10px",color:"black" }}>
        Edit/Delete
      </th>
    </tr>
    </thead>

    <tbody>
        {complaints.map((complaint) => (
          <tr key={complaint._id}>
            <td>{complaint.createdBy.username}</td>
            <td>{complaint.location}</td>
            <td>{complaint.category}</td>
            <td>
              <span
                style={{
                  color:
                  complaint.status === "Resolved"
                  ? "green"
                  : complaint.status === "Pending"
                  ? "red"
                  : "blue",
                  fontWeight: "bold",
                }}
              >
                {complaint.status}
              </span>
            </td>

            <td>
              <select value={status[complaint._id] || complaint.status}
                  onChange={(e) =>
                  setStatus({
                      ...status,
                      [complaint._id]: e.target.value,
                  })
              }>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </td>

            <td>
              <Link to={`/issues/${complaint._id}`}>
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
                  marginBottom:"1rem",
                }}
              
              >View</button>
              </Link>
            </td>

            <td>
              <button 
                onClick={() => updateComplaint(complaint._id)}
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
                  marginBottom:"1rem",
                }}>
                  Edit
              </button> <br />
                
              <button 
                onClick={()=> deleteComplaint(complaint._id)}
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
                }}>
                  Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ComplaintTable;