import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const validate = values => {
   const errors = {};
    
   if (!values.username) {
     errors.username = 'Please Enter Valid Username';
   }

   if (!values.email) {
     errors.email = 'Please Enter Valid Email';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   if (!values.password) {
     errors.password = 'Please Enter Password';
   }
   
   return errors;
 };
  

 const formik = useFormik({
     initialValues: {
       username: '',
       email: '',
       password: '',
     },
     validate,
     onSubmit: async(values) => {
      try{
        const res = await axios.post("http://localhost:5000/api/auth/register", 
          {
            username: values.username,
            email : values.email,
            password: values.password,
          }
        )
        login(res.data.token);
        toast.success("User Logged In Successfully");
        navigate("/");
      } catch(err){
      toast.error(err.response.data.message);
      }
    },
  });
  
  return (
    <div
      style={{
        maxWidth: "500px",
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
        Create Account
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {formik.touched.username && formik.errors.username ? (
        <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        
        {formik.touched.email && formik.errors.email ? (
        <p style={{ color: "red" }}>{formik.errors.email}</p>
        ) : null}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {formik.touched.password && formik.errors.password ? (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
        ) : null}

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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;