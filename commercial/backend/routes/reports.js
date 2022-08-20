const express = require('express');
const router2 = express.Router();

//require user validation from validators
const {update_validate , delete_validate} = require('../validators/reports');

//require controller
const ticket = require('../controllers/reports')

//=============================================================== روت های ثبت اطلاعات ================================================

router2.post('/ticket/create' , ticket.create)

//================================================================روت های دریافت اطلاعات==============================================

//get all users information router
router2.get('/tickets' , ticket.get)

//================================================================روت های آپدیت اطلاعات===============================================

//update user information router
router2.put('/ticket/answer' , update_validate , ticket.update)

//================================================================روت های حذف اطلاعات===============================================

//delete user information router
router2.delete('delete/:userId ', delete_validate , ticket.delete)

//Exports
module.exports = router2