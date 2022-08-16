//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

//create product controller
exports.create = async(req, res) => {
const title  = req.body.title 
const subTitle = req.body.subTitle
const price  = parseInt(req.body.price) 
const  discount = parseInt(req.body.discount)
const description = req.body.description
const category  = req.body.category
const  image  = req.body.image
  let newProduct = await db.Product.create({
        data : {
            title  : title ,
            subTitle : subTitle,
            price  : price ,
            discount : discount,
            description : description,
            category  : category,
            image  : image,
        }
    })
    return res.json({
        status : 200,
        msg : "محصول شما با موفقیت ثبت شد  ",
        data : newProduct
    })
}

exports.get_all = async(req , res) => {
    try {
        let product = await db.Product.findMany({
            select:{
                title  : true ,
                subTitle : true,
                price  : true,
                discount : true,
                description : true,
                category  : true,
                image  : true
            }
        
        })
        if(!product){
            return res.json({res: 404 , error: 'محصولی یافت نشد' })
        }
        return res.json({res: 200 ,
            msg:'اطلاعات تمامی محصولات بدین شرح است',
            data: user})

    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات در کنترلر با خطا مواجه شد"
        })
    }

}