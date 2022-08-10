const express = require('express');
const router = express.Router();

//user validation from validators
const {user_validate} = require('../validators/users');
const {user_validate_login} = require('../validators/users');


//create user from controller
const user = require('../controllers/users')


//this s users post router
router.post('/user/create' , user_validate, user.create)

//login user router
router.post('/user/login', user_validate_login, user.login)

//Exports
module.exports = router