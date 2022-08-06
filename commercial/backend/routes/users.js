const express = require('express');
const router = express.Router();

//user validation from validators
const {user_validate} = require('../validators/users');
const {find} = require('../validators/users')

//create user from controller
const user = require('../controllers/users')


//this s users post router
router.post('/user/create' , user_validate, find ,user.create)

//Exports
module.exports = router