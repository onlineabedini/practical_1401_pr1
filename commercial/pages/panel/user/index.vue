<template>
  <div>
    <app_header></app_header>

    <div class="d-flex justify-content-center p-5">
      <a href="user/update" class="btn btn-primary "
        >ویرایش اطلاعات کاربری</a
      >
    </div>

    <app_footer></app_footer>
  </div>
</template>

<script>
import app_header from "@/components/header/index.vue";
import app_footer from "@/components/footer";
export default {
  components: {
    app_header,
    app_footer,
  },
};
</script>

<style>
</style>