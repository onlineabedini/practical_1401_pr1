<template>
    <div>
        <app_header></app_header>
        <div class="container py-5">
            <Nuxt />
        </div>
        <app_footer></app_footer>
    </div>
</template>
  <script>
import app_header from "@/components/header";
import app_footer from "@/components/footer";

export default {
    components: {
        app_header,
        app_footer
    },
};
</script>
  <style scoped>
  .container {
      max-width: 1200px;
      margin: 0 auto;
      /* padding-block: 100px;
      padding-inline: 200px; */
  }
  </style>
  