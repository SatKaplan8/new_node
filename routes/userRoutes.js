const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const reg =require('./reg')
const login=require('./login')
const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser)
router.route('/register').post(reg)
router.route('/login').post(login)
module.exports = router