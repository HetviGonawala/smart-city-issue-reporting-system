import React, { useEffect, useState, useContext } from "react";
import ComplaintCard from "../components/ComplaintCard";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../api/axios";

function MyComplaints() {
  const [issues, setIssues] = useState([]);

  const { token } = useContext(AuthContext);
  
  const fetchIssues = async () => {
    try {
      const res = await api.get("/api/users/mycomplaints",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setIssues(res.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
    <h1 style={{margin: "1rem",}}>My Issues</h1>
    <div 
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(280px, 350px))",
        gap: "20px",
        marginBottom: "50px",
        marginLeft: "1rem"
      }}
    >

      {issues.map((issue) => (
        <ComplaintCard
        key={issue._id}
        id={issue._id}
        title={issue.title}
        category={issue.category}
        status={issue.status}
        />
      ))}
    </div>
    </>
  );
}

export default MyComplaints;