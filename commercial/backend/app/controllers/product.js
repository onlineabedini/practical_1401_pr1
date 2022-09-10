const model = require('./../models/product')

module.exports = new class {
    // get all
    get_all(req, res) {
        model.find({}, (err, data) => {
            if (err) {
                res.status(200).json({ ans: 'عملیات با خطا مواجه شد' })
            }

            if (data && data.length > 0) {
                res.status(200).json({
                    data: data,
                    ans: 'دریافت اطلاعات موفقیت آمیز بود'
                })
            } else {
                res.status(200).json({ ans: 'مقداری وجود ندارد' })
            }
        })
    }

    // get single
    get_by_id(req, res) {
        model.find({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(200).json({ ans: 'عملیات با خطا مواجه شد' })
            }

            if (data && data.length > 0) {
                res.json({
                    data: data,
                    ans: 'دریافت اطلاعات موفقیت آمیز بود'
                })
            } else {
                res.status(200).json({ ans: 'مقداری وجود ندارد' })
            }
        })
    }

    // get buy group
    get_by_group(req, res) {
        if (req.params.category !== 'all') {
            model.find({ category: req.params.category }, (err, data) => {
                if (err) {
                    res.status(200).json({ ans: 'عملیات با خطا مواجه شد' })
                }

                if (data && data.length > 0) {
                    res.status(200).json({
                        data: data,
                        ans: 'دریافت اطلاعات موفقیت آمیز بود'
                    })
                } else {
                    res.status(200).json({ ans: 'مقداری وجود ندارد' })
                }
            })
        } else {
            model.find({}, (err, data) => {
                if (err) {
                    res.status(200).json({ ans: 'عملیات با خطا مواجه شد' })
                }

                if (data && data.length > 0) {
                    res.status(200).json({
                        data: data,
                        ans: 'دریافت اطلاعات موفقیت آمیز بود'
                    })
                } else {
                    res.status(200).json({ ans: 'مقداری وجود ندارد' })
                }
            })
        }
    }

    // make signle
    make_one(req, res) {
        let sample = new model({
            title: req.body.title,
            subtitle: req.body.subtitle,
            price: req.body.price,
            img_url: req.body.img_url,
            sec_img_url: req.body.sec_img_url,
            description: req.body.description,
            category: req.body.category,
            discount: req.body.discount
        })
        sample.save('', (err, data) => {
            if (err) {
                res.status(200).json({ ans: 'عملیات با خطا مواجه شد' })
            }

            if (data) {
                res.status(200).json({ ans: "با موفقیت افزوده شد" })
            }
        });
    }

    // update single
    update_by_id(req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, {
            title: req.body.title,
            subtitle: req.body.subtitle,
            price: req.body.price,
            img_url: req.body.img_url,
            sec_img_url: req.body.sec_img_url,
            description: req.body.description,
            category: req.body.category,
            discount: req.body.discount
        },
            (err, data) => {
                if (err) {
                    res.status(200).status(200).json({
                        ans: 'عملیات با خطا مواجه شد'
                    })
                }

                if (data) {
                    res.status(200).status(200).json({
                        ans: "بروزرسانی موفقیت آمیز بود"
                    })
                } else {
                    res.status(200).status(200).json({
                        ans: "چنین آیتمی وجود ندارد"
                    })
                }
            })
    }

    // delete single
    delete_by_id(req, res) {
        model.findOneAndDelete({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(200).json({ ans: 'عملیات با خطا مواجه شد' })
            }

            if (data) {
                res.status(200).json({ ans: "با موفقیت حذف شد" })
            } else {
                res.status(200).json({ ans: "چنین آیتمی وجود ندارد" })
            }
        })
    }
}