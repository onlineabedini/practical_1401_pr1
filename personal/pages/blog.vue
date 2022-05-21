<template>
<div>
    <div class="row m-0">
        <div class="col-3"><cardBlog></cardBlog></div>
        <div class="col-3"><cardBlog></cardBlog></div>
        <div class="col-3"><cardBlog></cardBlog></div>
        <div class="col-3"><cardBlog></cardBlog></div>
    </div>
</div>
</template>

<script>
import cardBlog from "~/components/cards/cardBlog.vue";
export default {
    components: {
        cardBlog,
    },
}

</script>

<style>
</style>