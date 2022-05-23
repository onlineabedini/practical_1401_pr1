<template>
  <div>
    <about-us></about-us>
  </div>
</template>

<script>
import aboutUs from "~/components/about/aboutUs.vue";
export default {
  components: {
    aboutUs,
  },
  layout() {
    return "aboutUs";
  },
};

<style></style>;
