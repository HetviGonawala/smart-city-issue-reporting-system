const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    image:{
        filename: String,
        url: String,
    },
    category: {
        type: String,
        enum:[
            "Pothole",
            "Garbage",
            "Water Leakage",
            "Street Light",
            "Road Damage",
        ],
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["Pending", "In Progress", "Resolved"],
        default: "Pending",
        required: true,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt:{
        type: Date,
        default : Date.now,
    },
})

const Issue = mongoose.model("Issue",issueSchema);

module.exports = Issue;