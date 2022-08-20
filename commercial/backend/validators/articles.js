//config database
const { PrismaClient, prisma } = require('@prisma/client')
const db = new PrismaClient()
const _ = require('lodash')
require('dotenv').config()

//require file from utils
const {isNumber} = require('./../utils/is')

exports.get_one_validate = (req , res , next) => {
    try {
     let articleId = req.params.articleId
     if(articleId && !isNumber(articleId)){
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
        let isArticle = await db.Article.findFirst({
            where:{
                id: id,
            }
        }) 
        if(isArticle){
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
        const articleId = req.params.articleId
        const articleId1 = parseInt(req.params.articleId)

        if(articleId && !isNumber(articleId)){
            return res.json({res : 400 , error :'آیدی باید عدد باشد'})
           }

        //find informations in database
        let trueId = await db.Article.findFirst({
            where:{
                id: articleId1,
            }
        }) 
        //validate dont exist id

        if(articleId1 && !trueId){
            return res.json({res : 400 , error :'این آیدی وجود ندارد'})
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