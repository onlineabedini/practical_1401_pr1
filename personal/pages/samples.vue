<template>
  <div>
    <div class="text-center p-5">
      <h1>نمونه کار های من</h1>
    </div>
    <div>
      <div
        class="border-bottom border-top border-dark w-50 mx-auto text-center"
      >
        <h3>نوشته های مرا در توییتر و شبکه های دیگر دنبال کنید</h3>
      </div>
    </div>
    <!-- v-for -->
    <div v-for="sample in sample_list" :key="sample.name"><cardSample></cardSample></div>
  </div>
</template>

<script>
import cardSample from "~/components/cards/cardSample.vue";
export default {
  components: {
    cardSample,
  },
  data() {
      return {
        sample_list:{
          samp1:{},
          samp2:{},
          samp3:{},
          samp4:{},
        }
      };
  }
};
</script>

<style scoped>
</style>