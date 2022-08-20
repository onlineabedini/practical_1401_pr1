//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

//create product controller
exports.create = async(req, res) => {

  let newCart = await db.Cart.create({
    })
    return res.json({
        status : 200,
        msg : "مقاله شما با موفقیت ثبت شد  ",
        data : newCart
    })
}

exports.get_all = async(req , res) => {
    try {
        let Cart = await db.Cart.findMany({
        
        })
        if(!Cart){
            return res.json({res: 404 , error: ' یافت نشد' })
        }
        return res.json({res: 200 ,
            msg:'اطلاعات تمامی سبدهای خرید بدین شرح است',
            data: Cart})

    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات در کنترلر با خطا مواجه شد"
        })
    }

}

exports.get_one = async(req , res) => {
    try {
        let cartId = parseInt(req.params.cartId)
        let Cart = await db.Cart.findFirst({
            where:{
             id: cartId
            }
        })
        if(!cartId){
            return res.json({res: 404 , error: 'چیزی با این شناسه یافت نشد' })
        }
        return res.json({res: 200 ,
            msg : `اطلاعات کالا با شناسه ${cartId} بدین شرح است`,
            data: Cart})

    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات در کنترلر با خطا مواجه شد"
        })
    }
}

//delete user controller
exports.delete = async(req, res) => {
    try {
        let cartId = parseInt(req.params.cartId)
        let deleteArticle = await db.Cart.delete({
            where:{
                id : cartId,
            }
        })
        return res.json({
            status : 200,
            msg : "اطلاعات شما با موفقیت حذف شد",
            data : cartId
        })
        
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات کنترلر با خطا مواجه شد"
        })  
    }
}

//update user controller
exports.update = async(req, res) => {
    try {
        const id = parseInt(req.body.id)
        let updateProduct = await db.Cart.update({
            where:{
                id : id
            },
            data:{
                products  : req.products,
            }    
        })
            return res.json({
                status : 200,
                msg : "اطلاعات شما با موفقیت آپدیت شد",
                data : updateProduct
            }) 
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات کنترلر با خطا مواجه شد"
        })  
    }
}