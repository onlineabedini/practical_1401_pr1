<template>
  <div class="m-0">
    <img :src="product.cardImage" class="img-fluid d-table" alt="img" />

    <h5 class="text-center text-secondary">
      {{ product.cardTitle }}
    </h5>
    <h4 class="text-center">
      {{ product.text }}
    </h4>
  </div>
</template>

<script>
export default {
    name: "single_card",
  props: ["product"],
};
</script>

<style>
</style>