<template>
    <div>
        <div class="main_div p-1">
            <div class="right_section">
                <div class="mx-3">
                    <search_box></search_box>
                </div>
                <div class="cart_btn mx-3" @click="show_cart()">
                    <i class="fas fa-basket-shopping"></i>
                </div>
            </div>
            <div v-if="is_loged_in === true">
                <profile_dropdown title="حساب کاربری">
                    <div class="p-2">
                        <router-link class="drop_link border-bottom" to="/panel">
                            <div><i class="fas fa-user"></i> <span>{{ user_info }}</span></div>
                            <div class="account-text">مشاهده حساب کاربری</div>
                        </router-link>
                        <div class="drop_link" @click="log_out()">
                            <i class="fas fa-arrow-right-from-bracket"></i>
                            خروج
                        </div>
                    </div>
                </profile_dropdown>
            </div>
            <div v-if="is_loged_in === false">
                <nuxt-link to="/auth/login" class="btn btn-success login_btn text-light">
                    ورود / ثبت نام
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import profile_dropdown from '@/components/global/profile_dropdown'
import search_box from '@/components/global/search_box';

export default {
    components: {
        profile_dropdown,
        search_box
    },
    computed: {
        user_info() { return this.$store.state.user_data.full_name },
        is_loged_in() { return this.$store.state.is_logged_in }
    },
    methods: {
        log_out() {
            this.$store.commit('log_out')
        },
        show_cart() {
            this.$router.push('/cart/')
        }
    }
}
</script>
<style scoped>
.main_div {
    display: flex;
    font-weight: bold;
    font-size: 20px;
    justify-content: space-between;
    position: relative;
}

.right_section {
    display: flex;
}

.cart_btn {
    cursor: pointer;
}

.account-text {
    color: rgba(0, 0, 0, 0.477);
    font-size: 14px;
}

.login_btn {
    text-decoration: none;
}

@media only screen and (max-width: 500px) {
    .main_div {
        display: flex;
        font-weight: none;
        font-size: 15px;
        justify-content: space-between;
        position: relative;
    }
}
</style>