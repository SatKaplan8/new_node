const express = require('express')
const router = express.Router();
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const dotenv=require('dotenv').config();

const login = asyncHandler(async (req,res)=>{
    try{
        const {username,password}=req.body
        const user = await User.findOne({username})
        console.log(user)
        console.log(req.body.password)
        if(!user)
        {
            return res.status(401).json({error:"Authentication Failed"})
        }
        const passMatch=password==user.password
        console.log(passMatch)
        if(!passMatch)
        {   
            return res.status(401).json({error:'Authentication Failed1'})
        }
        const token = jwt.sign({username:user.username},process.env.JWT_SECRET)
        console.log(token)
        res.status(200).json({token})
    }
    catch(error){
        res.status(500).json({ error: 'Login failed' });
    }

})
module.exports=login