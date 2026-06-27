import React, {useState, useEffect} from "react";
import axios from "axios";
import ComplaintTable from "../components/ComplaintTable";

function ManageComplaints() {

   const [complaints, setComplaints] = useState([]);
  
    const token = localStorage.getItem("token");
  
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
    console.log(res.data);
  
    } catch (err) {
      console.log(err);
    }
  };
  
    useEffect(()=>{
      fetchComplaints()
    },[])

  // const complaints = [
  //   {
  //     id: 1,
  //     user: "Harsh",
  //     category: "Road",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2,
  //     user: "Rahul",
  //     category: "Cleanliness",
  //     status: "Resolved",
  //   },
  //   {
  //     id: 3,
  //     user: "Priya",
  //     category: "Electricity",
  //     status: "In Progress",
  //   },
  // ];

  return (
    <div
  style={{
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
  }}
  >
      <h1 style={{marginBottom:"0.75rem"}}>Manage Complaints</h1>

      <p>
        View and manage all complaints submitted by users.
      </p>
      <br />
      <ComplaintTable 
          complaints={complaints}
          setComplaints={setComplaints}
      />
    </div>
  );
}

export default ManageComplaints;