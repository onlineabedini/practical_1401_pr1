const express = require('express');
const router4 = express.Router();

//require user validation from validators
const {get_one_validate , update_validate , delete_validate} = require('../validators/carts');

//require controller
const cart = require('../controllers/carts')

//=============================================================== روت های ثبت اطلاعات ================================================

router4.post('/cart/create' , cart.create)

//================================================================روت های دریافت اطلاعات==============================================

//get all users information router
router4.get('/carts/all' , cart.get_all)

//get user information by id router
router4.get('/cart/one/:articleId', get_one_validate , cart.get_one)

//================================================================روت های آپدیت اطلاعات===============================================

//update user information router
router4.put('/cart/update' , update_validate , cart.update)

//================================================================روت های حذف اطلاعات===============================================

//delete user information router
router4.delete('/cart/delete/:articleId', delete_validate , cart.delete)

//Exports
module.exports = router4