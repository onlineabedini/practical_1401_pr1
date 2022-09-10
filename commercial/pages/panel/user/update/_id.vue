<template>
    <div>
        <div class="main_div">
            <div class="title_div text-end py-2">
                <h3>حساب کاربری</h3>
            </div>
            <!-- main section -->
            <div class="info_div rtl p-5">
                <!--  -->
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام و نام خانوادگی</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="user_data.full_name" :disabled="!is_updating">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام کاربری</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="user_data.username" :disabled="!is_updating">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">شماره تماس</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="user_data.phone" :disabled="!is_updating">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">پست الکترونیکی</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="user_data.email" :disabled="!is_updating">
                    </div>
                    <div class="mb-3" v-if="is_updating">
                        <label for="exampleInputPassword1" class="form-label">گذرواژه جدید</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                            v-model="user_data.password">
                    </div>
                    <div class="mb-3" v-if="is_updating">
                        <label for="exampleInputPassword1" class="form-label"> تکرار گذرواژه جدید</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="re_pass">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">آدرس منزل</label>
                        <textarea rows="3" class="form-control" v-model="user_data.address"
                            :disabled="!is_updating"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" v-if="!is_updating" @click="update()">بروزرسانی
                        اطلاعات</button>
                    <button type="button" class="btn btn-outline-dark" v-if="!is_updating" @click="delete_data()">حذف
                        کاربر</button>
                    <button type="button" class="btn btn-primary" v-if="is_updating" @click="update_data()">ثبت
                        اطلاعات</button>
                    <button type="button" class="btn btn-outline-dark" v-if="is_updating"
                        @click="cancel_updating()">لغو</button>
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
            is_updating: false,
            user_data: {},
            re_pass: '',
            saved_data: ''
        }
    },
    mounted() {
        this.get_data()
    },
    methods: {
        get_data() {
            let id = this.$route.fullPath.split('/')[4]
            this.$axios.get('/user/get_id/' + id).then(
                res => {
                    this.user_data = res.data.data[0];
                    this.saved_data = this.user_data;
                },
                err => {
                    alert(err.data.ans)
                }
            )
        },

        update() {
            this.user_data.password = ''
            this.re_pass = ''
            this.is_updating = true
        },

        update_data() {
            let is_valid = this.is_valid()

            if (is_valid === true) {
                this.$axios.put('/user/update/' + this.user_data._id, this.user_data).then(
                    res => {
                        alert('بروزرسانی موفقیت آمیز بود')
                        this.is_updating = false;
                        this.$store.commit('update_user', res.data.data)
                        this.saved_data = res.data.data;
                    },
                    err => {
                        alert('برزورسانی با خطا مواجه شد')
                    }
                )
            } else {
                alert('لطفا همه فیلد ها را به درستی وارد کنید')
            }
        },

        delete_data(){
            this.$axios.delete('/user/delete/' + this.user_data._id).then(
                res => {
                    alert('با موفقیت حذف شد')
                    this.$router.push('/panel/user/')
                },
                err => {
                    alert('حذف اطلاعات با خطا مواجه شد')
                }
            )
        },

        cancel_updating() {
            this.is_updating = false;
            this.user_data = { ...this.saved_data }
        },

        is_valid() {
            if (this.user_data.full_name === '') return false;
            if (this.user_data.username === '') return false;
            if (this.user_data.phone === '') return false;
            if (this.user_data.email === '') return false;
            if (this.user_data.new_password === '') return false;
            if (this.user_data.address === '') return false;

            if (this.user_data.password !== this.re_pass) return false;
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