//config database
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()
//const _ = require('loadash')

const {isNumber , isName} = require('./../utils/is')


exports.user_validate = async(req, res, next) => {
    try {
        const email = req.body.email
        const phone = req.body.phone
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        
        //validate email

        // if(!email ){
        //     console.log("v1");

        //     return res.json({res : 400 , error :'ایمیل نا معتبر است'})
        // }
        
        //validate phone
        if(phone && !isNumber /*|| phone.length() < 11 || phone.length() > 13*/){
         console.log("v2");
         return res.json({res : 400 , error :'تلفن نا معتبر است'})
        }

        //validate to inter phone or email
        if(!phone && !email){
            console.log("v3");

            return res.json({res : 400 , error :'لطفا حداقل یکی از پارامترهای تلفن یا ایمیل را به درستی وارد کنید'})
        }

        //validate first name
        if(firstName && !isName){
            console.log("v4");

            return res.json({res : 400 , error :' لطفا نام را فقط با حروف انگلیسی یا فارسی وارد کنید و از نوشتن اعداد یا علائم خودداری کنید' })
        }

        //validate last name
        if(lastName && !isName){
            console.log("v5");

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

exports.find = async(req, res) => {
    let oldUser = await db.User.findMany({
        include : {
            userName : req.body.userName,
            email : req.body.email,
            phone : req.body.phone,

        }
    })
    return res.json({
        status : 200,
        msg : "این کاربر قبلا ثبت نام کرده است",
        data : oldUser
    })
}