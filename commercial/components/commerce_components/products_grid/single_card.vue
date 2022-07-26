<template>
  <div>
    <i class="text-white bg-danger fa"><p>discount</p></i>
    <img :src="product.cardImage" class="img-fluid d-table" alt="img" />

    <h3 class="text-center text-dark">
      {{ product.cardTitle }}
    </h3>
    <h5 class="text-center text-secondary">
      {{ product.price }}
    </h5>
    <!-- plus icon -->
    <div class="d-flex justify-content-center">
      <div class="btn rounded-pill btn-danger d-grid col-md-2">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
</style>