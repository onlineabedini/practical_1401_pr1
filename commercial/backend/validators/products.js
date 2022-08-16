//config database
const { PrismaClient, prisma } = require('@prisma/client')
const db = new PrismaClient()
const _ = require('lodash')
require('dotenv').config()

//require file from utils
const {isNumber} = require('./../utils/is')

//create user validation
exports.product_validate = async(req, res, next) => {
    try {
        //these are vars
        const title  = req.body.title 
        const price = req.body.price
        const discount= parseInt(req.body.discount)
        const image = req.body.image

//validate email
        if(discount && !(0<discount<101)){
             return res.json({res : 400 , error :'تخفیف نا معتبر است'})
            }
                
        if(!image){
                  image === "https://irnode.com/img/irlogo.png"
            }
                
//validate phone
        if(price && !isNumber(price)){
             return res.json({res : 400 , error :'لطفا قیمت را عددی وارد کنید'})
            }

        //find informations in database
        let oldTitle = await db.Product.findFirst({
            where:{
                title: title,
            }
        }) 
        
        //validate exist title
        if(title && oldTitle){
            return res.json({res : 400 , error :'در گذشته محصولی با این عنوان ثبت شده است'})
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
