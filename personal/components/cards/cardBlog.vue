<template>
  <div class="card mb-1">
    <img :src="cardImage" class="card-img-top" alt="image" />
    <div class="card-body text-center">
      <h6 class="card-title">
        {{ cardTitle }}
      </h6>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardImage", "cardTitle", "description"],
};
</script>

<style scoped>
</style>
