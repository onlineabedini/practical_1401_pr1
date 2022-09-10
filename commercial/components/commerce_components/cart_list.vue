<template>
    <div>
        <div class="main_div py-5">
            <!-- title section -->
            <div class="title_div pb-3">
                <div v-if="product_list && product_list.length > 0">
                    <h3>لیست سبد خرید</h3>
                </div>
                <div v-else>
                    <h3>سبد خرید خالی است</h3>
                </div>
            </div>
            <!-- list section -->
            <div class="list_div">
                <div class="list_item" v-for="product in product_list" :key="product.title">
                    <div class="right_info">
                        {{ product.title }}
                    </div>
                    <div class="left_info">
                        {{ product.price }}
                    </div>
                </div>
            </div>
            <!-- total section -->
            <div class="total_div">
                <div class="label">مبلغ کل سبد خرید شما:</div>
                <div class="value">{{ total_price }}</div>
            </div>
            <!-- button section -->
            <div class="button-section py-5">
                <div>
                    <nuxt-link class="btn btn-primary" to="/"> بازگشت </nuxt-link>
                    <div class="btn btn-danger" @click="clear_cart()"> پاکسازی </div>
                </div>
                <div class="btn btn-danger" @click="bank_dev()">اقدام به پرداخت</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product_list: [],
            // total_price: 0,
        }
    },
    computed: {
        total_price() {
            // let total = 0;
            // this.product_list.forEach(product => {
            //     total = product.price + total
            // });

            // return total;
            return '...';
        },
    },
    created() {
        this.get_products();
    },
    methods: {
        get_products() {
            let id = this.$store.state.user_data._id;
            this.$axios.get('/user/get_id/' + id).then(
                res => {
                    this.product_list = res.data.data[0].cart;
                    this.calc_total();
                },
                err => {
                    alert('در ارتباط با سرور مشکلی پیش آمد')
                }
            );
        },

        clear_cart() {
            this.$store.commit('clear_cart')
            this.product_list = [];
            this.total_price = 0;
        },

        bank_dev() {
            alert(`
            --------------
            این بخش باید توسط توسعه دهنده برای استفاده در حالت 
            محصول توسعه داده شود و به درگاه بانکی متصل گردد.
            --------------
            `)
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

.list_div {
    /*  */
}

.list_item {
    border: 1px solid rgba(0, 0, 0, 0.381);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 5px;
    cursor: pointer;
}

.total_div {
    border: 1px solid rgba(0, 0, 0, 0.381);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 5px;
    font-weight: bold;
}

.label {
    color: rgba(0, 0, 0, 0.438);
}

.value {
    color: black;
}

.button-section {
    display: flex;
    justify-content: space-between;
}
</style>