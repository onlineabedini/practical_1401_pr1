//config database for send query
const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()
require('dotenv').config()

exports.create = async( req, res) => {
    try {
        let title = req.body.title
        if (!title) {
            return res.json({res: 400, error: "لطفا عنوان اعلان را وارد کنید"})
        }
        let notice = await db.noticess.create({
            data:{
                title
            }
        })
        return res.json({res: 200, msg:"اعلان با موفقیت ثبت شد.", data: notice})
    } catch (error) {
        console.log(error);
        return res.json({res:400, error: "متاسفانه عملیات ساخت اعلان با خطا مواجه شد"})
    }
}

exports.getAll = async( req, res) => {
    try {
        let notices = await db.noticess.findMany({})
        if (!notices || notices.length < 1) {
            return res.json({res: 200, msg:"در حال حاظر هیچ اعلانی وجود ندارد"})
        }
        return res.json({res: 200, data: notices})
    } catch (error) {
        console.log(error);
        return res.json({res:400, error: "متاسفانه عملیات دریافت اعلان ها با خطا مواجه شد"})
    }
}

exports.delete = async( req, res) => {
    try {
        let id = parseInt(req.params.id)
        if (!id) {
            return res.json({res: 400 , error: "شناسه اعلان را وارد کنید"})
        }
        let notices = await db.noticess.delete({
            where:{
                id: id
            }
        })

        return res.json({res: 200, msg:"اعلان با موفقیت حذف شد"})
    } catch (error) {
        console.log(error);
        return res.json({res:400, error: "متاسفانه عملیات حذف اعلان با خطا مواجه شد"})
    }
}
exports.update = async( req, res) => {
    try {
        let title = req.body.title
        if (!title) {
            return res.json({res: 400, error: "لطفا عنوان اعلان را وارد کنید"})
        }
        let notice = await db.noticess.update({
            data:{
                title
            }
        })
        return res.json({res: 200, msg:"اعلان با موفقیت بروزرسانی شد.", data: notice})
    } catch (error) {
        console.log(error);
        return res.json({res:400, error: "متاسفانه عملیات ساخت اعلان با خطا مواجه شد"})
    }
}

