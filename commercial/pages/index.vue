<template>
  <div>
    <app_header></app_header>
    <grids></grids>
    <products_grid></products_grid>
    <!-- <img_grid ></img_grid> -->
    <app_footer></app_footer>
  </div>
</template>

<script>
// import img_grid from '@/components/second_img_grid';
import grids from '@/components/img_grid'
import app_header from '@/components/header/index.vue'
import products_grid from '@/components/commerce_components/products_grid'
import app_footer from'@/components/footer'
export default {
  components :{ 
    app_header,
    grids,
    products_grid,
    app_footer,
    // img_grid,
  }

}
</script>

<style>

</style>