<template>
    <div>
        <!-- first -->
        <div class="first-section text-center p-5">
            <h1>{{ article_data.title }}</h1>
            <h3>{{ article_data.description }}</h3>
            <img class="w-100 img-fluid" :src="article_data.img_url" alt="">
        </div>
        <!-- second -->
        <div class="second-section p-5">
            {{ article_data.content }}
        </div>
    </div>
</template>
<script>
export default {
    layout: "article",
    data() {
        return {
            article_data: {
                title: "مقاله آزمایشی",
                description: "این یک مقاله آزمایشی برای کاربران عزیز است",
                img_url: 'https://license-market.ir/uploads/image/rootimage/1121/4ad373bb2b0112fc7aaf3a187999ec25.jpg',
                content: `
                این محتوای مربوط به مقاله شما است که بصورت آزمایشی در این اقسمت به نمایش درآمده است و میتوان از آن برای اهداف آزامیشی استفاده کرد
                `
            },
            id: 1
        }
    },
    mounted() {
        this.get_data()
    },
    methods: {
        get_data() {
            let id = this.$route.fullPath.split('/')[3]
            console.log(id)
            this.$axios.get('/article/get_id/' + id).then(
                res => {
                    this.article_data = res.data.data[0];
                    console.log(this.article_data)
                },
                err => {
                    alert(err.data.ans)
                }
            )
        },
    }
}
</script>
<style scoped>
</style>
