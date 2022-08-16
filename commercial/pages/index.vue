<template>
  <div>
    <warnning></warnning>
    <app_header></app_header>
    <img_grids></img_grids>
    <single_card></single_card>
    <app_footer></app_footer>
  </div>
</template>
<script>
import warnning from '@/components/warrning.vue'
import app_header from '@/components/header/index.vue'
import img_grids from '@/components/img_grid'
import single_card from '@/components/commerce_components/products_grid/index.vue'
import app_footer from'@/components/footer'
export default {
  components :{ 
    warnning,
    app_header,
    img_grids,
    single_card,
    app_footer,
  }
}
</script>
<style></style>