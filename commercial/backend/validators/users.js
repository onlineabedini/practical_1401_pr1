//config database
const { PrismaClient, prisma } = require('@prisma/client')
const db = new PrismaClient()
const _ = require('lodash')
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
        const password = req.body.password
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        let  gender = req.body.gender

        //validate email
         if(email && (email.indexOf("@")) < 1 ){
             return res.json({res : 400 , error :'ایمیل نا معتبر است'})
          }
                
        if(email && !_.endsWith(email , ".com")){
             return res.json({res : 400 , error :'ایمیل باید با .com تمام شود'})
         }
                
         //validate phone
         if(phone && !isNumber(phone)){
             return res.json({res : 400 , error :'تلفن نا معتبر است'})
         }
        
        if(phone && !(phone.length === 11)){
             return res.json({res : 400 , error :'تعداد ارقام تلفن باید یازده رقم باشد'})
         }
           
         //validate to inter phone or email
        if(!phone && !email){
            return res.json({res : 400 , error :'لطفا حداقل یکی از پارامترهای تلفن یا ایمیل را به درستی وارد کنید'})
         }
        
        //validate to inter password
        if(!password){
            return res.json({res : 400 , error :'لطفا یک پسورد برای اکانت خود وارد کنید'})
            }
        
        //validate to inter username
        if(!userName){
            return res.json({res : 400 , error :'لطفا یک نام کاربری برای اکانت خود وارد کنید'})
             }
        
        //validate first name
        if(firstName && !isName(firstName)){
            return res.json({res : 400 , error :' لطفا نام را فقط با حروف انگلیسی یا فارسی وارد کنید و از نوشتن اعداد یا علائم خودداری کنید' })
            }
        
        //validate last name
        if(lastName && !isName(lastName)){
            return res.json({res : 400 , error :' لطفا نام خانوادگی را فقط با حروف انگلیسی یا فارسی وارد کنید و از نوشتن اعداد یا علائم خودداری کنید' })
            }
        
        //validate gender
         if(gender && !(gender === 'MAN') && !(gender === 'WOMAN') ){
            return res.json({res : 400 , error :'لطفا جنسیت را فقط به صورت MAN و یا WOMAN انتخاب کنید' })
             }

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
        if(userName && oldUsername){
            return res.json({res : 400 , error :'در گذشته کاربری با این یوزرنیم ثبت نام کرده'})
            }
        
        //validate exist email
        if(email && oldEmail){
            return res.json({res : 400 , error :'این ایمیل ثبت نام کرده است'})
            }

        //validate exist phone
        if(phone && oldPhone){
            return res.json({res : 400 , error :'این شماره تلفن ثبت نام کرده است'})
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
        const userName = req.body.userName
        const password = req.body.password

        //validate to inter username
        if (!userName){
             return res.json({res : 400 , error :' لطفا برای ورود یوزرنیم را وارد کنید' })
        }
        
       //validate to inter password
        if (!password){
             return res.json({res : 400 , error :' لطفا برای ورود پسورد را وارد کنید' })
         }

        //find informations in database
        let trueUsername = await db.User.findFirst({
            where:{
                userName: userName,
            }
        }) 
        let truePassword = await db.User.findFirst({
            where:{
                password: password,
            }
        })
        //validate dont exist username
        if(userName && !trueUsername){
            return res.json({res : 400 , error :'کاربری با این یوزرنیم وجود ندارد'})
         }

        //validate wrong passworrd
        if(password&&!truePassword){
            return res.json({res : 400 , error :'رمز اشتباه است'})
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

exports.get_one_validate = (req , res , next) => {
   try {
    let userId = req.params.userId
    if(userId && !isNumber(userId)){
        return res.json({res: 404 , error: 'شناسه باید عدد باشد' })
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

exports.update_validate = async(req , res , next) => {
        try {
            //these are vars
            let oldPassword = req.body.oldPassword
            const id = req.body.id
            //validate dont exist id
            if(!id){
                return res.json({res : 400 , error :' آیدی را وارد کنید'})
            }
            if(!oldPassword){
                return res.json({res : 400 , error :' پسورد را وارد کنید'})
            }
            //find informations in database
            let isUser = await db.User.findFirst({
                where:{
                    id: id,
                    password: oldPassword
                }
            }) 
            if(isUser){
                next()
            }else{
                return res.json({res: 400, error: "رمز و شناسه کاربر نادرست است."})
            }

      
        } catch (error) {
            console.log(error)
            return res.json({
                status : -1,
                msg : "عملیات با خطا مواجه شد"
        })

    }
}

exports.delete_validate = async(req , res , next) => {
        try {
                    //these are vars
            const userId = req.params.userId
            const userId1 = parseInt(req.params.userId)

            if(userId && !isNumber(userId)){
                return res.json({res : 400 , error :'آیدی باید عدد باشد'})
               }

            //find informations in database
            let trueId = await db.User.findFirst({
                where:{
                    id: userId1,
                }
            }) 
            //validate dont exist id

            if(userId1 && !trueId){
                return res.json({res : 400 , error :'کاربری با این آیدی وجود ندارد'})
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
