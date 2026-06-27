import react, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";


function EditReportIssue() {
    const { id } = useParams();

  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log("edit", token);

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


  const formik = useFormik({
     enableReinitialize: true,
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

    const res = await axios.put(`http://localhost:5000/api/issues/${id}`,
      formData,
      {
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-Type":"multipart/form-data"
        }
      }
    );

    alert(res.data.message);
    navigate(`/issues/${id}`);

  }
  catch(err){
        console.log(err);
  }

},
});

  const fetchComplaint = async()=>{
    console.log("edit issue route");
    try{
      const res = await axios.get(`http://localhost:5000/api/issues/${id}`,
        {
          headers: {
            Authorization : `Bearer ${token}`,
          }
        }
      );
      console.log(res.data);
      formik.setValues({
          title: res.data.title,
          category: res.data.category,
          description: res.data.description,
          location: res.data.location,
      });
    } catch(err){
      console.log(err);
    }
  }
 
  useEffect(()=>{
    fetchComplaint();
  },[id]);

    return(
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
        Edit Report Issue
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
          <option>Pothole</option>
          <option>Garbage</option>
          <option>Water Leakage</option>
          <option>Street Light</option>
          <option>Road Damage</option>
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
          Edit Issue
        </button>
        
      </form>
    </div>
    )
}

export default EditReportIssue;