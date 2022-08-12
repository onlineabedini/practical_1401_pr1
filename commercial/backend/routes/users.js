const express = require('express');
const router = express.Router();

//require user validation from validators
const {user_validate} = require('../validators/users');
const {user_validate_login , get_one_validate} = require('../validators/users');


//require controller
const user = require('../controllers/users')

//=============================================================== روت های ثبت اطلاعات ================================================

//register user router
router.post('/user/create' , user_validate, user.create)

//login user router
router.post('/user/login', user_validate_login, user.login)

//================================================================روت های دریافت اطلاعات==============================================

//get user information by id router
router.get('/user/one/:userId', get_one_validate , user.get_one)

//get all users information router
router.get('/users/all' , user.get_all)

//================================================================روت های آپدیت اطلاعات===============================================

//update user information router
router.put('/user/update')

//================================================================روت های حذف اطلاعات===============================================


//Exports
module.exports = router