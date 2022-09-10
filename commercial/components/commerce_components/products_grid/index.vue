<template>
    <div>
        <div class="py-5">
            <div class="title_div mb-3" v-if="grid_title">
                <h2>{{ grid_title }}</h2>
                <div class="divider"></div>
            </div>
            <div class="row m-0 p-0" v-if="product_list">
                <div class="col-12 col-md-6 col-lg-3 p-1 text-center" v-for="product in product_list"
                    :key="product.title">
                    <single_product :title="product.title" :price="product.price" :img_url="product.img_url"
                        :sec_img_url="product.sec_img_url" :discount="product.discount"
                        @add_to_cart="add_to_cart(product)" @edit_product="edit_product(product._id)"
                        @open_product="open_product(product._id)">
                    </single_product>
                </div>
            </div>
            <div v-else>
                هیچ محصولی وجود ندارد
            </div>
        </div>
    </div>
</template>
<script>
import single_product from './single_card'
export default {
    props: ['grid_cards'],
    data() {
        return {
            product_list: [],
            // grid data
            grid_title: 'محصولات',
        }
    },
    components: {
        single_product
    },
    mounted() {
        this.define_title()
        this.get_all_products()
    },
    methods: {
        define_title() {
            switch (this.grid_cards) {
                case 'all':
                    this.grid_title = 'همه محصولات'
                    break;

                case 'new':
                    this.grid_title = 'محصولات جدید'
                    break;

                case 'popular':
                    this.grid_title = 'پرطرفدار'
                    break;

                case 'film':
                    this.grid_title = 'فیلم و سریال'
                    break;

                case 'account':
                    this.grid_title = 'اکانت شبکه های اجتماعی'
                    break;

                case 'music':
                    this.grid_title = 'موسیقی'
                    break;

                case 'education':
                    this.grid_title = 'آموزشی'
                    break;

                case 'special':
                    this.grid_title = 'محصولات کاربردی ویژه'
                    break;
            }
        },
        get_all_products() {
            this.$axios.get('/product/get_by/' + this.grid_cards).then(
                res => {
                    this.product_list = res.data.data
                },
                err => {
                    alert('دریافت اطلاعات با مشکل مواجه شد')
                }
            )

        },
        add_to_cart(product) {
            let cart_product = {
                title: product.title,
                price: product.price
            }

            this.$store.commit('add_to_cart', cart_product);
        },
        edit_product(id) {
            this.$router.push('/panel/product/update/' + id)
        },
        open_product(id) {
            this.$router.push('/product/single_product/' + id)
        }
    },
}
</script>
<style scoped>
    .title_div{
        display: flex;
        position: relative;
    }

    .title_div h2 {
        background-color: white;
        padding-left: 10px;
        z-index: 1;
    }
</style>