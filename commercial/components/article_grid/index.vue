<template>
    <div>
        <div class="main_div py-5">
            <div class="title-div mb-3">
                <h2> مطالب وبلاگ </h2>
                <div class="divider"></div>
            </div>
            <!-- articles section -->

            <div class="row m-0 pb-5" v-if="article_list">
                <div class="col-12 col-md-6 col-lg-4 p-3 text-center" v-for="article in article_list" :key="article.id">
                    <single_article_card :title="article.title" :description="article.description"
                        :img_url="article.img_url" @edit_article="edit_article(article._id)"
                        @show_article="show_article(article._id)"></single_article_card>
                </div>
            </div>
            <div v-else>
                هیچ مقاله ای وجود ندارد
            </div>
        </div>
    </div>
</template>
<script>
import single_article_card from "./single_article_card.vue";

export default {
    data() {
        return {
            article_list: [],
        };
    },
    mounted() {
        this.get_all_articles()
    },
    components: {
        single_article_card
    },
    methods: {
        get_all_articles() {
            this.$axios.get('/article/get_all').then(
                res => {
                    console.log(res)
                    this.article_list = res.data.data
                },
                err => {
                    alert('دریافت اطلاعات با مشکل مواجه شد')
                }
            )
        },

        edit_article(id) {
            this.$router.push('/panel/article/update/' + id)
        },

        show_article(id) {
            this.$router.push('/blog/article/' + id)
        }
    }
}
</script>
<style scoped>
.title-div {
    display: flex;
    position: relative;
}

.title-div h2 {
    background-color: white;
    padding-left: 10px;
    z-index: 1;
}
</style>