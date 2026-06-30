import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import ComplaintTable from "../components/ComplaintTable";
import { toast } from "react-toastify";

function ManageComplaints() {

  const [complaints, setComplaints] = useState([]);
  const { token } = useContext(AuthContext);
  
  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/complaints",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
      setComplaints(res.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  
  useEffect(()=>{
    fetchComplaints()
  },[])

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1 style={{marginBottom:"0.75rem"}}>Manage Complaints</h1>

      <p style={{marginBottom:"1rem"}}>
        View and manage all complaints submitted by users.
      </p>
    
      <div className="table-container">
      <ComplaintTable 
          complaints={complaints}
          setComplaints={setComplaints}
      />
      </div>
    </div>
  );
}

export default ManageComplaints;