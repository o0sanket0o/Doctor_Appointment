const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "First name is required",
        minlength: [3, "First name should be atleast 3 characters long"]
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true,
        minlength: [5, "Email should be atleast 5 characters long"]
    },
    password: {
        type: String,
        required: "true",
    },
}, {timestamps: true})

module.exports = mongoose.model("User", userSchema);