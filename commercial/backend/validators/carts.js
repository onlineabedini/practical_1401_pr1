//config database
const { PrismaClient, prisma } = require('@prisma/client')
const db = new PrismaClient()
const _ = require('lodash')
require('dotenv').config()

//require file from utils
const {isNumber} = require('./../utils/is')

exports.get_one_validate = (req , res , next) => {
    try {
     let cartId = req.params.cartId
     if(cartId && !isNumber(cartId)){
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
        let isCart = await db.Cart.findFirst({
            where:{
                id: id,
            }
        }) 
        if(isCart){
            next()
        }else{
            return res.json({res: 400, error: " شناسه نادرست است."})
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
        const cartId = req.params.cartId
        const cartId1 = parseInt(req.params.cartId)

        if(cartId && !isNumber(cartId)){
            return res.json({res : 400 , error :'آیدی باید عدد باشد'})
           }

        //find informations in database
        let trueId = await db.Product.findFirst({
            where:{
                id: productId1,
            }
        }) 
        //validate dont exist id

        if(cartId1 && !trueId){
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