import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplaintCard from "../components/ComplaintCard";

function MyComplaints() {
  const [issues, setIssues] = useState([]);
  
  const fetchIssues = async () => {

    const token = localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:5000/api/users/mycomplaints",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      console.log(res.data);
      setIssues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);


  return (
    <div>
      <h1 style={{margin: "1rem",}}>My Issues</h1>

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
  );
}

export default MyComplaints;