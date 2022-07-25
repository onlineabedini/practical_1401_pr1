<template>
  <div>
    <div><app_header></app_header></div>
    <div><Nuxt /></div>
    <div><app_footer></app_footer></div>
  </div>
</template>

<script>
import app_header from "@/components/header/app_header.vue";
import app_footer from "@/components/footer/app_footer.vue";

export default {
  components: {
    app_header,
    app_footer,
  },
};
</script>

<style scoped>
</style>
