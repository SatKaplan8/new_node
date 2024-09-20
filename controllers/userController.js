
const User = require('../models/userModel')
const asyncHanndler = require('express-async-handler')

const getUsers = asyncHanndler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

const getUserById = asyncHanndler(async (req, res) => {

    const data = await User.findById(req.params.id);
    if (!data) {
        res.status(404)
        throw new Error('User Not Found')
    }
    res.status(200).json({ message: `Success`, data })
})


const deleteUser = asyncHanndler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }
    await User.findByIdAndDelete(req.params.id); 
    res.status(200).json({ message: `Deleted user with id ${req.params.id}` });
});

const createUser = asyncHanndler(async (req, res) => {
    console.log(req.body)
  
    const { name, age, dept, salary, gender, state, phone,username,password } = req.body

    if (!name || !age || !dept || !salary || !gender || !state || !phone ) {
        res.status(400)
        throw new Error('All Fields Are Mandatory');
    }
    const newUser = await User.create({ name, age, dept, salary, gender, state, phone,username,password })
    res.status(201).json({ message: "Create a User", data: newUser })
})
const updateUser = asyncHanndler(async (req, res) => {
    const id = req.params.id;
    const { name, age, dept, salary, gender, state, phone,username,password } = req.body;
    const user = await User.findById(id);

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, age, dept, salary, gender, state, phone,username,password },
        { new: true }
    );

    res.status(200).json({ message: `Updated user ${id}`, data: updatedUser });
});








module.exports = { getUsers, getUserById, createUser, deleteUser, updateUser }