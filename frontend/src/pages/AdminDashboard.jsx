import React, { useState, useEffect, useContext} from "react";
import StatsCard from "../components/StatsCard";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

function AdminDashboard() {

  const [records, setRecords] = useState({});
  const { token } = useContext(AuthContext);

  const fetchRecords = async()=>{

      try{
        const res = await api.get("/api/admin/dashboard",
          {
            headers:{
              Authorization: `Bearer ${token}`,
            }
          }
        );
        setRecords(res.data);
      } catch(err) {
        toast.error(err.response.data.message);
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
      <h1 style={{marginBottom: "0.75rem"}}>Admin Dashboard</h1>

      <p>Monitor complaint statistics and track issue resolution.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop:"1rem"
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