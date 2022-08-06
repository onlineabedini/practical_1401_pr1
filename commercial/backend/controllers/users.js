//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

exports.create = async(req, res) => {
    let newUser = await db.User.create({
        data : {
            userName : req.body.userName,
            firstnameName : req.body.firstName,
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
exports.find = async(req, res) => {
    let oldUser = await db.User.findMany({
        include : {
            userName : true,
            email : true,
            phone : true,

        }
    })
    return res.json({
        status : 200,
        msg : "این کاربر قبلا ثبت نام کرده است",
        data : oldUser
    })
}