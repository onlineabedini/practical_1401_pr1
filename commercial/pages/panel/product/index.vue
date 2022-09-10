<template>
    <div>
        <div class="button-section text-end">
            <nuxt-link class="btn btn-primary" to="/panel/product/add">اضافه کردن محصول جدید</nuxt-link>
        </div>
        <div>
            <product_grid grid_cards="all"></product_grid>
        </div>
    </div>
</template>
<script>
import product_grid from "@/components/commerce_components/products_grid";

export default {
    layout: "panel",
    components: {
        product_grid
    }
}
</script>