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
        if(discount && !(0<discount && discount<101)){
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

exports.get_one_validate = (req , res , next) => {
    try {
     let productId = req.params.productId
     if(productId && !isNumber(productId)){
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
        const id = req.body.id
        //validate dont exist id
        if(!id){
            return res.json({res : 400 , error :' آیدی را وارد کنید'})
        }
        //find informations in database
        let isProduct = await db.Product.findFirst({
            where:{
                id: id,
            }
        }) 
        if(isProduct){
            next()
        }else{
            return res.json({res: 400, error: " شناسه کالا نادرست است."})
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
        const productId = req.params.productId
        const productId1 = parseInt(req.params.productId)

        if(productId && !isNumber(productId)){
            return res.json({res : 400 , error :'آیدی باید عدد باشد'})
           }

        //find informations in database
        let trueId = await db.Product.findFirst({
            where:{
                id: productId1,
            }
        }) 
        //validate dont exist id

        if(productId1 && !trueId){
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
