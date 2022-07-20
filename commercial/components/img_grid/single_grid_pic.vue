<template>
  <div class="row">
    <div class="col">
      <div>
        <h5 class="card-title p-3 mt-5">
          {{ item.cardTitle }}
        </h5>
      </div>
      <div>
        <h4 class="p-3">
          {{ item.text }}
        </h4>
      </div>
    </div>

    <div class="col d-flex m-auto">
      <img :src="item.cardImage" class="img-fluid" alt="" />
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