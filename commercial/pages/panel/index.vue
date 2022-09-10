<template>
    <div class="main_div">
        <div class="products_div">
            <product_grid grid_cards="all"></product_grid>
        </div>
        <div>
            <article_grid></article_grid>
        </div>
        <div class="alert_div">
            <alert_grid>
            </alert_grid>
        </div>
    </div>
</template>
<script>
import alert_grid from '@/components/alert/alert_grid.vue'
import product_grid from "@/components/commerce_components/products_grid";
import article_grid from "@/components/article_grid";

export default {
    layout: "panel",
    components: {
        alert_grid,
        product_grid,
        article_grid,
    },
}
</script>