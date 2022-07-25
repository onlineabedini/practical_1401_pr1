<template>
  <div>
    <div class="text-center p-5">
      <h2>وبلاگ</h2>
    </div>

    <div>
      <div
        class="border-bottom border-top border-dark w-50 mx-auto text-center"
      >
        <h3>نوشته های مرا در توییتر و شبکه های دیگر دنبال کنید</h3>
      </div>
    </div>

    <!-- ----------------------------------- -->
    <cardBlog></cardBlog>
  </div>
</template>

<script>
import cardBlog from "~/components/cards/cardBlog.vue";
export default {
  components: {
    cardBlog
  }
};
</script>

<style></style>
