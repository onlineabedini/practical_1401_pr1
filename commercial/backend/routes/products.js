const express = require('express');
const router1 = express.Router();

//require user validation from validators
const {product_validate} = require('../validators/products');

//require controller
const product = require('../controllers/products')

//=============================================================== روت های ثبت اطلاعات ================================================

router1.post('/product/create' , product_validate , product.create)

//================================================================روت های دریافت اطلاعات==============================================

//get all users information router
router1.get('/products/all' , product.get_all)

//================================================================روت های آپدیت اطلاعات===============================================

//================================================================روت های حذف اطلاعات===============================================


//Exports
module.exports = router1