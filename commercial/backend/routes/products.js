const express = require('express');
const router1 = express.Router();

//require user validation from validators
const {product_validate , get_one_validate , update_validate , delete_validate} = require('../validators/products');

//require controller
const product = require('../controllers/products')

//=============================================================== روت های ثبت اطلاعات ================================================

router1.post('/product/create' , product_validate , product.create)

//================================================================روت های دریافت اطلاعات==============================================

//get all users information router
router1.get('/products/all' , product.get_all)

//get user information by id router
router1.get('/product/one/:productId', get_one_validate , product.get_one)

//================================================================روت های آپدیت اطلاعات===============================================

//update user information router
router1.put('/product/update' , update_validate , product.update)

//================================================================روت های حذف اطلاعات===============================================

//delete user information router
router1.delete('/product/delete/:productId', delete_validate , product.delete)

//Exports
module.exports = router1