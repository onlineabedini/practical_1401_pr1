<template>
    <div>
        <div class="main_div pb-5">
            <div>
                <h3>{{ title }}</h3>
            </div>
            <div class=" py-3">
                <h4>{{ price }}</h4>
            </div>
            <!-- select section -->
            <div class="row m-0 ">
                <div class="col-12 col-md-6  p-0 ps-2">
                    <!-- plan data -->
                    <select class="form-select" aria-label="Default select example" v-model="extra_data.plan_data">
                        <option selected>نوع پلن خود را انتخاب کنید</option>
                        <option :value="plan" v-for="plan in plan_data">{{ plan }}</option>
                    </select>
                </div>
                <div class="col-12 col-md-6  p-0 pe-2">
                    <!-- account data -->
                    <select class="form-select" aria-label="Default select example" v-model="extra_data.account_data">
                        <option selected>نوع اکانت خود را انتخاب کنید</option>
                        <option :value="account" v-for="account in account_data">{{ account }}</option>
                    </select>
                </div>
            </div>
            <!-- btn section -->
            <div class="pt-5">
                <div class="btn btn-danger py-2 px-3" @click="add_to_cart()">اضافه به سبد خرید</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            default: 'عنوان محصول'
        },
        price: {
            default: 'رایگان'
        },
    },
    data() {
        return {
            plan_data: ['پلن اشتراکی', 'پلن قابل تمدید', 'پلن تکی'],
            account_data: ['یک ماهه', 'سه ماهه', 'شیش ماهه', 'دوازده ماهه'],
            extra_data: {
                plan_data: 'پلن اشتراکی',
                account_data: 'یک ماهه'
            }
        }
    },
    methods: {
        add_to_cart() {
            let product = {
                title: this.title,
                price: this.price,
                extra: this.extra_data
            }

            this.$store.commit('add_to_cart', product);
        },
    }
}
</script>