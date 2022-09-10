<template>
    <div>
        <div class="main_div">
            <div class="row m-0">
                <div class="col-12 col-md-5 p-0 p-1">
                    <img class="w-100" :src="product_data.img_url" alt="تصویر محصول">
                </div>
                <div class="col-12 col-md-7 p-0 p-5">
                    <div>
                        <div>
                            <add_to_cart :title="product_data.title" :price="product_data.price"></add_to_cart>
                        </div>
                        <div>
                            <inforamtion_card :information="product_data.description"></inforamtion_card>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <faq></faq>
            </div>
        </div>
    </div>
</template>
<script>
import add_to_cart from '@/components/commerce_components/single_product/add_to_cart_component.vue'
import inforamtion_card from '@/components/commerce_components/single_product/inforamtion_card.vue'
import faq from "@/components/faq"

export default {
    data() {
        return {
            product_data: {}
        }
    },
    components: {
        add_to_cart,
        inforamtion_card,
        faq
    },
    mounted() {
        this.get_data()
    },
    methods: {
        get_data() {
            let id = this.$route.fullPath.split('/')[3]
            this.$axios.get('/product/get_id/' + id).then(
                res => {
                    this.product_data = res.data.data[0];
                },
                err => {
                    alert(err.data.ans)
                }
            )
        }
    }
}
</script>
<style scoped>
/*  */
</style>