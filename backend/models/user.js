const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true,
    },
    createdAt: {
        type: Date,
        default : Date.now,
    }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);

module.exports = User;