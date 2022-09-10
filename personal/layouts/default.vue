<template>
  <div>
    <app_header></app_header>
    <div class="container">
      <Nuxt />
    </div>
    <app_footer></app_footer>
  </div>
</template>
<script>
import app_header from "@/components/header/header.vue";
import app_footer from "@/components/footer/footer.vue";

export default {
  components: {
    app_header,
    app_footer
  },
};
</script>
<style scoped>
.container{
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px;
}
</style>
