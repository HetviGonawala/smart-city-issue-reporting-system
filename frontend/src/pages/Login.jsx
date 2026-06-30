import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Please Enter Username';
   }
 
   if (!values.password) {
     errors.password = 'Please Enter Password';
   }
 
   return errors;
 };

  const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     validate,
     onSubmit: async(values) => {
      try{
        const res = await api.post("/api/auth/login", 
        {
          username: values.username,
          password: values.password,
        }
        );
        toast.success(res.data.message)
        login(res.data.token);
        navigate("/");
      } catch (err) {
        toast.error(err.response.data.message)
      }
    }
  })

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        backgroundColor: "white",
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
        Login
      </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label htmlFor="username">Username</label>

          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        {formik.touched.username && formik.errors.username ? (
        <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}

        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        
        {formik.touched.password && formik.errors.password ? (
        <p style={{ color: "red" }}>{formik.errors.password}</p>
        ) : null}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
        Don't have an account?{" "}
        <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;