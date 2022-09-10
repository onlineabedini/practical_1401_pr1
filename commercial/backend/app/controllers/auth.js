const model = require('./../models/user')

module.exports = new class {
    login(req, res) {
        model.findOne({ username: req.body.username }, (err, data) => {
            if (err) {
                res.status(400).json({
                    ans: 'در ارتباط با سرور مشکلی پیش آمده است',
                    success: false,
                })
            }

            if (data) {
                if (data.password === req.body.password) {
                    res.status(200).json({
                        data: data,
                        ans: 'ورود موفقیت آمیز بود',
                        success: true,
                    })
                } else {
                    res.status(400).json({
                        ans: 'اطلاعات وارد شده غلط است',
                        success: false,
                    })
                }
            } else {
                res.status(400).json({
                    ans: 'چنین کاربری یافت نشد',
                    success: false,
                })
            }
        })
    }

    register(req, res) {
        let user = new model({
            full_name: req.body.full_name,
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
        });

        user.save('', (err, data) => {
            if (err) {
                res.status(400).json({
                    ans: 'عملیات با خطا مواجه شد',
                    success: false,
                })
            }

            if (data) {
                res.status(200).json({
                    ans: "با موفقیت افزوده شد",
                    success: true
                })
            }
        });
    }
}