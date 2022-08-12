//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
const {isNumber} = require('./../utils/is')

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
    const userName = req.body.userName
    const password = req.body.password
    let user = await db.User.findFirst({
        where:{
            userName: userName,
            password: password
        }
    })
        return res.json({
            status : 200,
            msg : "شما با موفقیت وارد حساب کاربری خود شدید",
            data : user
        })
    
}

exports.get_one = async(req , res) => {
    try {
        let userId = req.params.id
        let user = await db.User.findFirst({
            where:{
             id: userId
            },
            select:{
                userName : true,
                firstName : true,
                lastName : true,
                email : true,
                phone : true,
                address :true
            }
        })
        if(!user){
            return res.json({res: 404 , error: 'کاربری با این شناسه یافت نشد' })
        }

        if(userId && !isNumber){
            return res.json({res: 404 , error: 'کاربری با این شناسه یافت نشد' })
        }

        if(user){
            return res.json({res: 200 , data: user})
        }


    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات با خطا مواجه شد"
        })
    }
}

exports.get_all = async(req , res) => {
    try {
        let user = await db.User.findMany({
            where:{
                id : req.params.id
            },
            select:{
                userName : true,
                firstName : true,
                lastName : true,
                email : true,
                phone : true,
                address :true
            }
            
        })
        if(!user){
            return res.json({res: 404 , error: 'کاربری با این شناسه یافت نشد' })
        }
        return res.json({res: 200 , data: user})

    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات با خطا مواجه شد"
        })
    }

}

//update user controller
exports.update = async(req, res) => {
    let updateUser = await db.User.update({
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
        msg : "اطلاعات شما با موفقیت آپدیت شد",
        data : updateUser
    })
}
