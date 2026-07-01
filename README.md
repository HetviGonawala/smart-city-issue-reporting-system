# Smart City Issue Reporting System

A full-stack **MERN** web application that enables citizens to report civic issues such as potholes, garbage, water leakage, street light failures, road damage, and other public infrastructure problems.

Users can report issues with image uploads, track complaint status, manage their own complaints, while administrators can efficiently monitor and resolve reported issues through a secure dashboard.

The application is deployed using **Vercel** (Frontend) and **Render** (Backend), with **MongoDB Atlas** for cloud database storage and **Cloudinary** for image hosting.

## 🔗 Project Links

- **Live Demo:** [Smart City Issue Reporting System](https://smart-city-issue-reporting-system-alpha.vercel.app)
- **Source Code:** [GitHub Repository](https://github.com/HetviGonawala/smart-city-issue-reporting-system)

---

## ✨ Features

### User

- User Registration & Login using JWT Authentication
- Report Civic Issues with Image Upload
- View All Reported Issues
- View Detailed Information About Individual Issues
- Edit & Delete Own Complaints
- Track Complaint Status (Pending, In Progress, Resolved)

### Admin

- Secure Admin Dashboard
- View All Reported Issues
- Update Complaint Status
- Manage User Complaints Efficiently

### User Experience

- Responsive Design for Desktop, Tablet, and Mobile Devices
- Form Validation
- Clean and Modern User Interface

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Formik
- CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JWT Authentication
- Role-Based Authorization

### File Storage

- Cloudinary
- Multer

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Image Storage: Cloudinary

---

## 🏗️ Project Architecture
The application follows a simple client-server architecture.

```text
           User
            |
            v
   Frontend (React + Vite)
            |
            v
     HTTP / API Requests
            |
            v
   Backend (Node.js + Express)
            |
    +---------+--------+
    |                  |
    v                  v
MongoDB Atlas      Cloudinary
(Store Data)      (Store Images)

```

---

## 📸 Screenshots

### Home Page

![Home Page Top](assets/screenshots/homeTop.png)

![Home Page Bottom](assets/screenshots/homeBottom.png)

### Report Issue

![Report Issue](assets/screenshots/reportIssue.png)

### My Complaints

![My Complaints](assets/screenshots/myComplaints.png)

### Complaint Details

![Complaint Details](assets/screenshots/complaintDetails.png)

### Admin Dashboard

![Admin Dashboard](assets/screenshots/adminDashboard.png)

### Manage Complaints

![Manage Complaints](assets/screenshots/manageComplaints.png)

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/HetviGonawala/smart-city-issue-reporting-system.git

cd smart-city-issue-reporting-system
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** directory.

```env
MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔮 Future Enhancements

- Search and Filter Complaints
- Google Maps Location Integration
- Dark Mode

---

## 👩‍💻 Author

**Hetvi Gonawala**

- GitHub: [Hetvi Gonawala](https://github.com/HetviGonawala)
- LinkedIn: [Hetvi Gonawala](https://www.linkedin.com/in/hetvi-gonawala-aa400b411/)

---

## 📄 License

This project is developed for educational and portfolio purposes.