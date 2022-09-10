<template>
    <div>
        <div class="main_div">
            <div class="title_div text-center mb-5">
                <div class="divider"></div>
                <h3>لیست کاربران</h3>
            </div>
            <div class="list_div" v-if="user_list">
                <div class="list_item mb-1" v-for="user in user_list" :key="user.name" @click="show_user(user._id)">
                    <div class="right_info">
                        <div class="name">{{ user.full_name }}</div>
                        <div class="username">{{ user.username }}</div>
                    </div>
                    <div class="left_info">
                        <div class="email">
                            {{ user.email }}
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                هیچ کاربری وجود ندارد
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user_list: [],
        }
    },
    mounted() {
        this.get_all_users()
    },
    methods: {
        get_all_users() {
            this.$axios.get('/user/get_all').then(
                res => {
                    this.user_list = res.data.data
                },
                err => {
                    alert('دریافت اطلاعات با مشکل مواجه شد')
                }
            )
        },
        show_user(id) {
            this.$router.push('/panel/user/update/' + id)
        },
    }
}
</script>
<style scoped>
.main_div {
    /*  */
}

.list_div {
    /*  */
}

.list_item {
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.right_info {
    display: flex;
}

.name {
    /*  */
    padding: 10px;
    text-decoration: none;
}

.username {
    /*  */
    padding: 10px;
}

.email {
    /*  */
    padding: 10px;
}

@media only screen and (max-width: 500px) {
    .list_item {
        display: inline-block;
        padding: 2px;
    }

    .right_info {
        border: 1px solid black;
        display: flex;
    }

}
</style>