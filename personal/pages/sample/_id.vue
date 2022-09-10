<template>
    <div>
        <!-- first -->
        <div class="first-section text-center p-5">
            <h1>{{ sample.title }}</h1>
            <h3>{{ sample.description }}</h3>
            <img class="w-100 img-fluid" :src="sample.img_url" alt="">
        </div>
        <!-- second -->
        <div class="second-section p-5">
            {{ sample.data }}
        </div>
    </div>
</template>
<script>
export default {
    layout: "pages",
    data() {
        return {
            sample: [],
            id: 1
        }
    },
    mounted() {
        // find id
        this.id = this.$route.params.id

        // send request
        this.$axios.get('/sample/' + this.id)
            .then(response => {
                this.sample = response.data
                console.log(this.sample)
            })
            .catch(error => {
                console.log(error)
            })
    },
}
</script>
<style scoped>
</style>
