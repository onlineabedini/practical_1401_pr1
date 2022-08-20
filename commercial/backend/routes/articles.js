const express = require('express');
const router3 = express.Router();

//require user validation from validators
const {get_one_validate , update_validate , delete_validate} = require('../validators/articles');

//require controller
const article = require('../controllers/articles')

//=============================================================== روت های ثبت اطلاعات ================================================

router3.post('/article/create' , article.create)

//================================================================روت های دریافت اطلاعات==============================================

//get all users information router
router3.get('/articles/all' , article.get_all)

//get user information by id router
router3.get('/article/one/:articleId', get_one_validate , article.get_one)

//================================================================روت های آپدیت اطلاعات===============================================

//update user information router
router3.put('/article/update' , update_validate , article.update)

//================================================================روت های حذف اطلاعات===============================================

//delete user information router
router3.delete('/article/delete/:articleId', delete_validate , article.delete)

//Exports
module.exports = router3