<template>
    <div>
        <div class="button-section text-end">
            <nuxt-link class="btn btn-primary" to="/panel/article/add">اضافه کردن مقاله</nuxt-link>
        </div>
        <div>
            <article_grid></article_grid>
        </div>
    </div>
</template>
<script>
import article_grid from "@/components/article_grid";

export default {
    layout: "panel",
    components: {
        article_grid
    }
}
</script>