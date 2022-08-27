const express = require('express');
const router = express.Router();

//require user validation from validators
// const {update_validate , delete_validate} = require('../validators/reports');

//require controller
const notices = require('../controllers/notices')

//=============================================================== روت های ثبت اطلاعات ================================================

router.post('/notices/create' , notices.create)

//================================================================روت های دریافت اطلاعات==============================================

//get all users information router
router.get('/notices' , notices.getAll)

//================================================================روت های آپدیت اطلاعات===============================================

//update user information router
router.put('/notices/update' ,  notices.update)

//================================================================روت های حذف اطلاعات===============================================

// delete user information router
router.delete('/notice/:id', notices.delete)

//Exports
module.exports = router