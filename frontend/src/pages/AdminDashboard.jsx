import React, { useState, useEffect } from "react";
import axios from "axios";
import StatsCard from "../components/StatsCard";

function AdminDashboard() {

  const [records, setRecords] = useState({});

  const fetchRecords = async()=>{
      const token = localStorage.getItem("token");
      try{
        const res = await axios.get("http://localhost:5000/api/admin/dashboard",
          {
            headers:{
              Authorization: `Bearer ${token}`,
            }
          }
        );
        console.log(res.data);
        setRecords(res.data);
      } catch(err) {
        console.log(err);
      }

  }

  useEffect(()=>{
    fetchRecords();
  }, []);

  return (
    <div
  style={{
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
  }}
  >
      <h1>Admin Dashboard</h1>
      <p>
  Monitor complaint statistics and track issue resolution.
  </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <StatsCard
          title="Total Complaints"
          value={records.total}
        />

        <StatsCard
          title="Pending"
          value={records.pending}
        />

        <StatsCard
          title="In Progress"
          value={records.inProgress}
        />

        <StatsCard
          title="Resolved"
          value={records.resolved}
        />
      </div>
    </div>
  );
}

export default AdminDashboard;