<template>
    <div>
        <div class="main_div my-5">
            <div class="title-div mb-4">
                <h2> نظرات کاربران </h2>
                <div class="divider"></div>
            </div>
            <!-- comments section -->
            <div class="row m-0">
                <div class="col-12 col-md-6 p-1 text-center" v-for="comment in comment_list" :key="comment.id">
                    <single_comment :comment="comment"></single_comment>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import single_comment from './single_comment_card.vue'
export default {
    props: ['grids', 'page_id'],
    data() {
        return {
            comment_list: {
                comment1: {
                    id: 1,
                    text: `
                        فروشگاه شما تنها موردی هست که اکانت ها رو روی ایمیل شخصی مشتری میده من نمونه پیدا نکردم و یا اگه باشن قیمتاشون قابل قبول نیست.... حتما به دوستانم توصیه میکنم.
                    `,
                    user: {
                        name: 'محمدرضا',
                        img_url: 'https://license-market.ir/uploads/image/rootimage/106/59142fea655f395209909128a2a90862.jpg',
                    }
                },
                comment2: {
                    id: 2,
                    text: `
                        از کلیه خدماتتون در این مدت کاملا راضیم هر سواليم داشتم خيلي سريع پيگيري شد و با صبوری پاسخ دادن چهار بار هم هست كه تمديد كردم اكانتمو تا حالا که هیچ مشکلی پیش نیومده و قیمتتون هم پایین تر از هر جای دیگه ای بوده.
                    `,
                    user: {
                        name: 'محمدرضا',
                        img_url: 'https://license-market.ir/uploads/image/rootimage/106/59142fea655f395209909128a2a90862.jpg',
                    }
                },
            }
        };
    },
    components: {
        single_comment
    },
    methods: {
        //
    },
    mounted() {
        //
    },
};
</script>
<style scoped>
.title-div {
    display: flex;
    position: relative;
}

.title-div h2 {
    background-color: white;
    z-index: 1;
}
</style>