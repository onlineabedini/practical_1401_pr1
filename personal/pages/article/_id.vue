<template>
    <div>
        <!-- first -->
        <div class="first-section text-center p-5">
            <h1>{{ article.title }}</h1>
            <h3>{{ article.description }}</h3>
            <img class="w-100 img-fluid" :src="article.img_url" alt="">
        </div>
        <!-- second -->
        <div class="second-section p-5">
            {{ article.content }}
        </div>
    </div>
</template>
<script>
export default {
    layout: "pages",
    data() {
        return {
            article: [],
            id: 1
        }
    },
    mounted() {
        // find id
        this.id = this.$route.params.id

        // send request
        this.$axios.get('/article/' + this.id)
            .then(response => {
                this.article = response.data
                console.log(this.article)
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>
<style scoped>
</style>
