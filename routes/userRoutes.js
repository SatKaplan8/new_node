const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getUsers).post(createUser)

router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser)


module.exports = router