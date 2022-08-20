//config database
const { PrismaClient, prisma } = require('@prisma/client')
const db = new PrismaClient()
const _ = require('lodash')
require('dotenv').config()

//require file from utils
const {isNumber} = require('./../utils/is')

 exports.update_validate = async(req , res , next) => {
    try {
        //these are vars
        const id = req.body.id
        //validate dont exist id
        if(!id){
            return res.json({res : 400 , error :' آیدی را وارد کنید'})
        }
        //find informations in database
        let isReport = await db.Reports.findFirst({
            where:{
                id: id,
            }
        }) 
        if(isReport){
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
        const reportId = req.params.reportId
        const reportId1 = parseInt(req.params.reportId)

        if(reportId && !isNumber(reportId)){
            return res.json({res : 400 , error :'آیدی باید عدد باشد'})
           }

        //find informations in database
        let trueId = await db.Reports.findFirst({
            where:{
                id: reportId1,
            }
        }) 
        //validate dont exist id

        if(reportId1 && !trueId){
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