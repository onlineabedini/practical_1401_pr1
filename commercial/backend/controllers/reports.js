//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

//create product controller
exports.create = async(req, res) => {
const title  = req.body.title 
const description = req.body.description
  let newReport = await db.Reports.create({
        data : {
            title  : title ,
            description : description
        }
    })
    return res.json({
        status : 200,
        msg : "تیکت شما با موفقیت ثبت شد  ",
        data : newReport
    })
}

exports.get = async(req , res) => {
    try {
        let reports = await db.Reports.findMany({

        
        })
        if(!reports){
            return res.json({res: 404 , error: 'چیزی یافت نشد' })
        }
        return res.json({res: 200 ,
            msg:'اطلاعات تمامی تیکتها بدین شرح است',
            data: reports})

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
        let reportId = parseInt(req.params.reportId)
        let deleteReport = await db.Reports.delete({
            where:{
                id : reportId,
            }
        })
        return res.json({
            status : 200,
            msg : "گزارش شما با موفقیت حذف شد",
            data : deleteReport
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
        let updateTicket = await db.Reports.update({
            where:{
                id : id
            },
            data:{
                answer  : req.body.answer,
            }    
        })
            return res.json({
                status : 200,
                msg : "پیام شما با موفقیت ثبت شد",
                data : updateTicket
            }) 
    } catch (error) {
        console.log(error)
        return res.json({
            status : 404 ,
            msg : "عملیات کنترلر با خطا مواجه شد"
        })  
    }
}