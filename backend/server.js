if(process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const cors = require("cors");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");

app.use(cors({
    origin: "http://localhost:5173"
}))

const adminRouter = require("./routes/adminRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const issueRouter = require("./routes/issueRoutes.js");
const userRouter = require("./routes/userRoutes.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/smartcityDB";
const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
}

main()
.then(()=>{
    console.log("DB is connected");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));

app.use("/api/admin",adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/issues", issueRouter);
app.use("/api/users", userRouter);

app.get("/",(req, res)=>{
    res.send("App is working successfully!");
})

//default Error middleware

app.use((req, res, next) =>{
    next(new ExpressError(404, "Page Not Found"));
})

//error Handler Middleware

app.use((err, req, res, next) =>{
    const { statusCode  = 500, message = "Somthing went wrong"} = err;
    res.status(statusCode).send(message);
})

app.listen(5000,() => {
    console.log("server is listening on 5000");
})