//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

//create user controller
exports.create = async(req, res) => {
    let newUser = await db.User.create({
        data : {
            userName : req.body.userName,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password,
            gender : req.body.gender,
            address :req.body.address
        }
    })
    return res.json({
        status : 200,
        msg : "شما با موفقیت ثبت نام شدید",
        data : newUser
    })
}

//login user controller
exports.login = async(req, res) => {
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    let user = await db.User.findFirst({
        where:{
            email: email,
            phone: phone,
            password: password
        }
    })
        return res.json({
            status : 200,
            msg : "شما با موفقیت وارد حساب کاربری خود شدید",
            data : user
        })
    
}


