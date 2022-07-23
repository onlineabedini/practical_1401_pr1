<template>
  <div>
    <app_header></app_header>
    <index></index>
    <app_footer></app_footer>
  </div>
</template>

<script>
import app_header from "@/components/header";
import index from "@/components/img_grid/index.vue";
import app_footer from "@/components/footer";
export default {
  // layout() {
  //   return "single_grid_pic";
  // },
  components: {
    index,
    app_header,
    app_footer,
  },
};
</script>

<style scoped>
</style>