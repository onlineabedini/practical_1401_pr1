const express = require('express');
const router = express.Router();

//user validation from validators
const {user_validate} = require('../validators/users');
const {user_validate_login} = require('../validators/users');


//create user from controller
const user = require('../controllers/users')

//=============================================================== روت های ثبت اطلاعات =================================================

//register user router
router.post('/user/create' , user_validate, user.create)

//login user router
router.post('/user/login', user_validate_login, user.login)

//================================================================روت های دریافت اطلاعات===============================================

router.get('/user/one/:userId')
router.get('/users/all')

//Exports
module.exports = router