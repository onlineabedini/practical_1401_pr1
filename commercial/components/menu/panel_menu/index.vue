<template>
    <div>
        <div class="main_div">
            <div class="main_btn btn btn-primary" @click="open_menu()">
                <i class="fas fa-bars"></i>
            </div>
            <div class="menu_div" v-if="show_menu">
                <!-- menu item -->
                <div class="menu_item border-bottom" v-for="item in menu_items"
                    :key="item.text" @click="click_item(item.link)">
                    <i :class="item.icon" v-if="item.icon !== ''"></i>
                    <span>{{ item.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menu_items: [
                {
                    text: "داشبورد",
                    link: "/panel",
                    icon: "fas fa-house",
                },
                {
                    text: "حساب کاربری",
                    link: "/panel/profile",
                    icon: "fas fa-user",
                },
                {
                    text: "کاربران",
                    link: "/panel/user",
                    icon: "fas fa-user-group",
                },
                {
                    text: "مقاله ها",
                    link: "/panel/article",
                    icon: "fas fa-file",
                },
                {
                    text: "محصولات",
                    link: "/panel/product",
                    icon: "fas fa-bag-shopping",
                },
                {
                    text: "تیکت های پشتیبانی",
                    link: "/panel/ticket",
                    icon: "fas fa-check-double",
                },
                {
                    text: "سبد خرید",
                    link: "/cart",
                    icon: "fas fa-basket-shopping",
                },
                {
                    text: "خریدهای من",
                    link: "/panel/purchased",
                    icon: "fas fa-cart-shopping",
                },
                {
                    text: "خروج",
                    link: "/",
                    icon: "fas fa-arrow-right-from-bracket",
                },
            ],
            show_menu: false,
        }
    },
    methods: {
        open_menu() {
            this.show_menu = !this.show_menu
        },
        click_item(path) {
            this.show_menu = !this.show_menu

            this.$router.push(path)
        }
    }
}
</script>
<style scoped>
.main_div {
    /*  */
}

.main_btn {
    /*  */
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 99;
}

.menu_div {
    /*  */
    position: fixed;
    top: 80px;
    right: 15px;
    left: 83%;


    text-align: right;
    padding: 20px;
    box-shadow: 0px 0px 5px blue;
    border-radius: 5px;

    background: white;
    z-index: 99;
}

.menu_item {
    color: black;
    padding: 15px;
    display: block;
    text-decoration: none;
    cursor: pointer;
}

@media only screen and (max-width: 500px) {
    .main_btn {
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 99;
    }

    .menu_div {
        position: fixed;
        top: 80px;
        right: 30px;
        left: 10%;

        text-align: right;
        padding: 20px;
        box-shadow: 0px 0px 5px black;
        border-radius: 5px;
        background: white;
        z-index: 99;
    }
}

@media only screen and (min-width: 500px) and (max-width: 990px) {
    .main_btn {
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 99;
    }

    .menu_div {
        position: fixed;
        top: 80px;
        right: 25px;
        left: 50%;

        text-align: right;
        padding: 20px;
        box-shadow: 0px 0px 5px black;
        border-radius: 5px;
        background: white;
        z-index: 99;
    }
}
</style>