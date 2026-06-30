import React, { useState, useContext } from "react";
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../api/axios";

function ReportIssue() {

  const { token } = useContext(AuthContext);

  const validate = values => {
   const errors = {};
   if (!values.title) {
     errors.title = 'Title is Required';
   }
 
   if (!values.category) {
     errors.category = 'Category is Required';
   } 
 
   if (!values.description) {
     errors.description = 'Description is Required';
   }

   if (!values.location) {
     errors.location = 'Location is Required';
   }
 
   return errors;
 };

 const [image, setImage] = useState(null);
 const navigate = useNavigate();

  const formik = useFormik({
     initialValues: {
       title: "",
       category:"",
       description:"",
       location:"",
     },
     validate,
     onSubmit: async (values) => {

      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("category", values.category);
      formData.append("description", values.description);
      formData.append("location", values.location);

      if(image){
        formData.append("image", image);
      }

      try{
        const res = await api.post("/api/issues",
        formData,
        {
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":"multipart/form-data"
          }
        }
      );
      toast.success(res.data.message);
      navigate("/myissues");
      } catch(err){
      toast.error(err.response.data.message);
      }
    },
  });

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "60px auto",
        background: "white",
        padding: "35px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#1e293b",
        }}
      >
        Report New Issue
      </h1>

      <form
        onSubmit = {formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Issue Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {formik.touched.title && formik.errors.title ? (
        <p style={{ color: "red" }}>{formik.errors.title}</p>
        ) : null}

        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Category</option>
          <option>Road Damage</option>
          <option>Street Light</option>
          <option>Garbage Collection</option>
          <option>Water Supply</option>
          <option>Traffic Signals</option>
          <option>Parks & Public Spaces</option>
        </select>

        {formik.touched.category && formik.errors.category ? (
        <p style={{ color: "red" }}>{formik.errors.category}</p>
        ) : null}
        
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Describe the issue"
          rows="5"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {formik.touched.description && formik.errors.description ? (
        <p style={{ color: "red" }}>{formik.errors.description}</p>
        ) : null}

        <input
          type="text"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Location"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        
        {formik.touched.location && formik.errors.location ? (
        <p style={{ color: "red" }}>{formik.errors.location}</p>
        ) : null}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
             width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#fff",
            cursor: "pointer",
            boxSizing: "border-box",
            marginBottom: "1rem",
          }}
        />
        
        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
}

export default ReportIssue;