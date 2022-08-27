//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

//create product controller
exports.create = async(req, res) => {
const subject  = req.body.subject 
const content = req.body.content 

  let newArticle = await db.Article.create({
        data : {
            subject  : subject ,
            content : content,
        }
    })
    return res.json({
        status : 200,
        msg : "مقاله شما با موفقیت ثبت شد  ",
        data : newArticle
    })
}

exports.get_all = async(req , res) => {
    try {
        let article = await db.Article.findMany({
        
        })
        if(!article){
            return res.json({res: 404 , error: 'مقاله یافت نشد' })
        }
        return res.json({res: 200 ,
            msg:'اطلاعات تمامی محصولات بدین شرح است',
            data: article})

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
        let articleId = parseInt(req.params.articleId)
        let article = await db.Article.findFirst({
            where:{
             id: articleId
            }
        })
        if(!article){
            return res.json({res: 404 , error: 'مقاله با این شناسه یافت نشد' })
        }
        return res.json({res: 200 ,
            msg : `اطلاعات کالا با شناسه ${articleId} بدین شرح است`,
            data: article})

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
        let articleId = parseInt(req.params.articleId)
        let deleteArticle = await db.Article.delete({
            where:{
                id : articleId,
            }
        })
        return res.json({
            status : 200,
            msg : "اطلاعات شما با موفقیت حذف شد",
            data : articleId
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
        let subject = req.body.subject
        let content = req.body.content
        let updateProduct = await db.Article.update({
            where:{
                id : id
            },
            data:{
                subject: subject,
                content: content
            }    
        })
            return res.json({
                status : 200,
                msg : "اطلاعات مقاله شما با موفقیت بروزرسانی شد",
                data : updateProduct
            }) 
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات بروزرسانی مقاله با خطا مواجه شد"
        })  
    }
}