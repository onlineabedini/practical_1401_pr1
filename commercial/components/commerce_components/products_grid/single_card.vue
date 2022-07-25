<template>
  <div>
    <img :src="product.cardImage" class="img-fluid d-table" alt="img" />

    <h3 class="text-center text-dark ">
      {{ product.cardTitle }}
    </h3>
    <h5 class="text-center text-secondary">
      {{ product.price }}
    </h5>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>