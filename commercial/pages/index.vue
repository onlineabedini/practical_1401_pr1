<template>
  <div>
    <app_header></app_header>
    <single_grid_pic></single_grid_pic>
    <app_footer></app_footer>
  </div>
</template>

<script>
import app_header from "@/components/header";
import single_grid_pic from "@/components/img_grid";
import app_footer from "@/components/footer";
export default {
  // layout() {
  //   return "single_grid_pic";
  // },
  components: {
    single_grid_pic,
    app_header,
    app_footer,
  },
};
</script>

<style scoped>
</style>