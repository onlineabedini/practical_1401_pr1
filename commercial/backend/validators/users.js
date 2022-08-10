//config database
const { PrismaClient, prisma } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

//require file from utils
const {isNumber , isName} = require('./../utils/is')

//create user validation
exports.user_validate = async(req, res, next) => {
    try {
        //these are vars
        const userName = req.body.userName
        const email = req.body.email
        const phone = req.body.phone
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        let atSign = email.indexOf("@")

        //find informations in database
        let oldUsername = await db.User.findFirst({
            where:{
                userName : userName,
            }
        }) 

        let oldEmail = await db.User.findFirst({
            where:{
                email: email,
            }
        }) 

        let oldPhone = await db.User.findFirst({
            where:{
                phone: phone,
            }
        })
        
        //validate exist username
        if(oldUsername){
            return res.json({res : 400 , error :'در گذشته کاربری با این یوزرنیم ثبت نام کرده'})
            }
        
        //validate exist email
        if(oldEmail){
            return res.json({res : 400 , error :'این ایمیل ثبت نام کرده است'})
            }

        //validate exist phone
        if(oldPhone){
            return res.json({res : 400 , error :'این شماره تلفن ثبت نام کرده است'})
            }
        
        //validate email
        if(atSign < 1 ){
            return res.json({res : 400 , error :'ایمیل نا معتبر است'})
        }
        
        //validate phone
        if(phone && !isNumber(phone)  || phone.length >= 12){
         return res.json({res : 400 , error :'تلفن نا معتبر است'})
        }

        //validate to inter phone or email
        if(!phone && !email){
            return res.json({res : 400 , error :'لطفا حداقل یکی از پارامترهای تلفن یا ایمیل را به درستی وارد کنید'})
        }

        //validate first name
        if(firstName && !isName(firstName)){
            return res.json({res : 400 , error :' لطفا نام را فقط با حروف انگلیسی یا فارسی وارد کنید و از نوشتن اعداد یا علائم خودداری کنید' })
        }

        //validate last name
        if(lastName && !isName(lastName)){
            return res.json({res : 400 , error :' لطفا نام خانوادگی را فقط با حروف انگلیسی یا فارسی وارد کنید و از نوشتن اعداد یا علائم خودداری کنید' })
        }
        next();
        
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات با خطا مواجه شد"
        })
    }
}

//login user validation
exports.user_validate_login = async (req, res, next) => {
    try {
        //these are vars
        const email = req.body.email
        const phone = req.body.phone
        const password = req.body.password

        //find informations in database
        let trueEmail = await db.User.findFirst({
            where:{
                email: email,
            }
        }) 
        let truePhone = await db.User.findFirst({
            where:{
                phone: phone,
            }
        }) 
        let truePassword = await db.User.findFirst({
            where:{
                password: password,
            }
        })

        //validate dont exist user email
        if(!trueEmail){
            return res.json({res : 400 , error :'کاربری با این ایمیل وجود ندارد'})
        }

        //validate dont exist user phone
        if(!truePhone){
            return res.json({res : 400 , error :'کاربری با این تلفن وجود ندارد'})
        }

        //validate wrong passworrd
        if(!truePassword){
            return res.json({res : 400 , error :'رمز اشتباه است'})
        }

        //validate to inter phone or email
        if (!email && !phone){
            return res.json({res : 400 , error :' لطفا برای ورود ایمیل یا تلفن را وارد کنید' })
        }

        //validate to inter password
        if (!password){
            return res.json({res : 400 , error :' لطفا برای ورود پسورد را وارد کنید' })
        }
        next()
    } catch (error) {
        console.log(error)
        return res.json({
            status : -1,
            msg : "عملیات با خطا مواجه شد"
        })
    }
}
