<template>
  <div class="row m-0">
    <div class="col">
      <img :src="item.cardImage" class="img-fluid d-table" alt="img" />
    </div>
    <div class="col mt-4">
      <h5 class="text-center">
        {{ item.cardTitle }}
      </h5>

      <h4 class="text-center">
        {{ item.text }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "single_grid_pic",
};
</script>

<style scoped>
</style>