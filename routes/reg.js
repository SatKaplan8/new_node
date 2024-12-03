const express = require('express')
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const reg = asyncHandler(async (req, res) => {
    try {
        const { name,age,dept,salary,gender,state,phone,username, password } = req.body;
        // const hashPass = await bcrypt.hash(password, 10);
        const user = new User({ name,age,dept,salary,gender,state,phone,username, password });
        await user.save();
        res.status(200).json({ message: "User Created Successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "User Registration Failed" })
    }    
})



module.exports = reg