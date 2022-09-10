<template>
    <div>
        <div class="main_div">
            <div class="title_div text-end py-2">
                <h3>ساخت حساب کاربری</h3>
            </div>
            <!-- main section -->
            <div class="info_div rtl p-5">
                <!--  -->
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام و نام خانوادگی</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="register_data.full_name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام کاربری</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="register_data.username">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">شماره تماس</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="register_data.phone">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">پست الکترونیکی</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="register_data.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">گذرواژه</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                            v-model="register_data.password">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">تکرار گذرواژه</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="re_password">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">آدرس منزل</label>
                        <textarea rows="3" class="form-control" v-model="register_data.address"></textarea>
                    </div>
                    <div class="mb-3">
                        <nuxt-link class="form-text" to="/auth/login">قبلا ثبت نام کرده اید؟</nuxt-link>
                    </div>
                    <button type="button" class="btn btn-primary" @click="register()">ثبت نام</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "panel",
    data() {
        return {
            register_data: {
                full_name: '',
                username: '',
                phone: '',
                email: '',
                password: '',
                address: '',
            },
            re_password: ''
        }
    },
    methods: {
        register() {
            let is_valid = this.is_valid()

            if (is_valid == true) {
                this.$axios.post('/user/make', this.register_data).then(
                    (res) => {
                        alert('ثبت نام موفقیت آمیز بود')
                        this.register_data = {}
                    },
                    (err) => {
                        alert('اطلاعات وارد شده غلط است')
                        this.register_data = {}
                        this.re_password = ''
                    }
                ).catch(err => {
                    alert('ارتباط با سرور برقرار نشد')
                })
            } else {
                alert('لطفا همه فیلد ها را به درستی وارد کنید')
            }
        },

        is_valid() {
            if (this.register_data.full_name === '') return false;
            if (this.register_data.username === '') return false;
            if (this.register_data.phone === '') return false;
            if (this.register_data.email === '') return false;
            if (this.register_data.password === '') return false;
            if (this.register_data.address === '') return false;

            if (this.register_data.password !== this.re_password) return false;
            return true;
        }
    }
}
</script>
<style scoped>
.main_div {
    /*  */
}

.title_div {
    /*  */
}

.info_div {
    /*  */
}
</style>