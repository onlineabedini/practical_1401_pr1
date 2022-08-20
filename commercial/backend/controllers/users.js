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
        let userId = parseInt(req.params.userId)
        let user = await db.User.findFirst({
            where:{
             id: userId
            },
            select:{
                id: true,
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
        return res.json({res: 200 ,
            msg : `اطلاعات کاربر با شناسه ${userId} بدین شرح است`,
            data: user})

    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات در کنترلر با خطا مواجه شد"
        })
    }
}

exports.get_all = async(req , res) => {
    try {
        let user = await db.User.findMany({
         
            select:{
                id: true,
                userName : true,
                firstName : true,
                lastName : true,
                email : true,
                phone : true,
                address :true
            }
        
        })
        if(!user){
            return res.json({res: 404 , error: 'کاربری یافت نشد' })
        }
        return res.json({res: 200 ,
            msg:'اطلاعات تمامی کاربران بدین شرح است',
            data: user})

    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات در کنترلر با خطا مواجه شد"
        })
    }

}

//update user controller
exports.update = async(req, res) => {
    try {
        const id = parseInt(req.body.id)
        let updateUser = await db.User.update({
            where:{
                id : id
            },
            data:{
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
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات کنترلر با خطا مواجه شد"
        })  
    }
}

//delete user controller
exports.delete = async(req, res) => {
    try {
        let userId = parseInt(req.params.userId)
        let deleteUser = await db.User.delete({
            where:{
                id : userId,
            }
        })
        return res.json({
            status : 200,
            msg : "اطلاعات شما با موفقیت حذف شد",
            data : deleteUser
        })
        
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات کنترلر با خطا مواجه شد"
        })  
    }
}

