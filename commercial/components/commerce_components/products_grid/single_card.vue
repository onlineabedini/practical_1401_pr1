<template>
    <div>
        <div class="main_div" @mouseover="mouse_over()" @mouseleave="mouse_leave()">
            <div @click="open_product()">
                <div class="img_div"><img class="img_fluid w-100" :src="img_url" alt="product image"></div>
                <div class="title_div">{{ title }}</div>
                <div class="price_div">{{ price }}</div>
            </div>
            <div class="discount_btn btn btn-danger rounded-circle" v-if="discount">تخفیف</div>
            <div class="add_btn btn btn-danger rounded-circle" v-if="show_add && !is_panel" @click.self="add_to_cart()">+</div>
            <div class="edit_btn btn btn-danger" v-if="show_edit && is_panel" @click.self="edit_product()">ویرایش</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        'title': {},
        'price': {},
        'img_url': {},
        'sec_img_url': {},
        'discount': {},
        'id': {
            default: 1
        }
    },
    data() {
        return {
            show_add: false,
            show_edit: false,
            is_panel: false
        }
    },
    created() {
        this.is_panel_route()
    },
    methods: {
        mouse_over() {
            this.show_add = true;
            this.show_edit = true;

            if (this.sec_img_url) {
                let temp = this.img_url
                this.img_url = this.sec_img_url
                this.sec_img_url = temp
            }
        },
        mouse_leave() {
            this.show_add = false;
            this.show_edit = false;

            if (this.sec_img_url) {
                let temp = this.img_url
                this.img_url = this.sec_img_url
                this.sec_img_url = temp
            }
        },
        add_to_cart() {
            this.$emit('add_to_cart', 'add to cart')
        },
        edit_product() {
            this.$emit('edit_product', 'edit product')
        },
        open_product() {
            this.$emit('open_product', this.id)
        },
        is_panel_route() {
            if (this.$route.fullPath.includes('panel')) {
                this.is_panel = true;
            }
        }
    }
}
</script>
<style scoped>
.main_div {
    position: relative;
    cursor: pointer;
}

.img_div img {
    border-radius: 20px;
}

.title_div {
    color: #6b7c93;
    font-weight: bold;
}

.price_div {
    color: #000000;
    font-size: 20px;
    font-weight: bold;
}

.discount_btn {
    position: absolute;
    top: 10px;
    right: 10px;
}

.add_btn {
    position: absolute;
    top: 20px;
    left: 15px;
}

.edit_btn {
    position: absolute;
    top: 20px;
    left: 15px;
    padding: 5px 20px;
}
</style>