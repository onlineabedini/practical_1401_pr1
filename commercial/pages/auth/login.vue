<template>
    <div>
        <div class="main_div">
            <div class="title_div text-end py-2">
                <h3>حساب کاربری</h3>
            </div>
            <!-- main section -->
            <div class="info_div rtl p-5">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">نام کاربری</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="login_data.username">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">پسورد</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                            v-model="login_data.password">
                    </div>
                    <div class="mb-3">
                        <nuxt-link class="form-text" to="/auth/register">هنوز ثبت نام نکرده اید؟</nuxt-link>
                    </div>
                    <button type="button" class="btn btn-primary" @click="login()">ورود</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            login_data: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        login() {
            this.$axios.post('/auth/login', this.login_data).then(
                (res) => {
                    alert('ورود موفقیت آمیز بود')
                    this.$store.commit('log_in', res.data.data)
                    this.login_data = {}
                    this.$router.push('/panel/')
                },
                (err) => {
                    alert('اطلاعات وارد شده غلط است')
                    this.login_data = {}
                }
            ).catch(err => {
                alert('ارتباط با سرور برقرار نشد')
            })
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