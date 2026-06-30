# Smart City Issue Reporting System

A full-stack web application that enables citizens to report civic issues such as potholes, garbage, water leakage, street light failures, and road damage. The platform allows users to submit issues with images, track their complaints, and enables administrators to manage and update issue statuses efficiently.

---

## Features

### User
- User registration and login with JWT authentication
- Report civic issues with image upload
- View all reported issues
- View detailed information about individual issues
- Edit and delete own complaints
- Track complaint status (Pending / In Progress / Resolved)

### Admin
- Secure admin dashboard
- View all reported issues
- Update complaint status
- Manage reported issues efficiently

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Formik
- React Bootstrap
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Passport.js
- Multer
- Cloudinary

### Database
- MongoDB Atlas

---

## Screenshots

-comming soon

## Project Structure

```
Smart-City-Issue-Reporting-System
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── app.js
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/HetviGonawala/smart-city-issue-reporting-system.git
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Run the backend

```bash
npm start
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Authentication

- JWT-based authentication
- Protected routes
- Role-based authorization (User/Admin)

---

## Image Upload

Images are uploaded securely using **Cloudinary** and stored with each complaint.

---

## Database

MongoDB Atlas is used to store:

- Users
- Reported Issues

---

## Future Enhancements

- Email notifications
- Google Maps integration
- Geolocation support
- Search and filtering
- Pagination
- Real-time complaint updates
- Analytics dashboard
- Dark mode

---

## Author

**Hetvi Gonawala**

**GitHub:** https://github.com/HetviGonawala

**LinkedIn:** https://www.linkedin.com/in/hetvi-gonawala-aa400b411

---

## License

This project is developed for educational and portfolio purposes.