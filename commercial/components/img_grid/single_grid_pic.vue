<template>
  <div class="row m-0">
    <div class="col" v-if="img_position == 'top'">
      <img :src="item.cardImage" class="img-fluid d-table" alt="img" />
    </div>
    <div class="col mt-4">
      <h5 class="text-center text-secondary">{{ item.cardTitle }}</h5>
      <h4 class="text-center text-dark ">{{ item.text }}</h4>
    </div>
    <div class="col" v-if="img_position == 'left'">
      <img :src="item.cardImage" class="img-fluid d-table" alt="img" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "img_position"],
};
</script>
<style scoped></style>