<template>
  <div class="card">
    <div>
      <img :src="cardImage" class="card-img-top rounded p-1 absolute" alt="image" />
    </div>

    <div>
      <h6 class="card-title">
        {{ cardTitle }}
      </h6>
    </div>

    <div>
      <p class="card-text">
        {{ decription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardSample",
  props: [
    "cardImage",
    "cardTitle",
    "decription",
  ],
};
</script>

<style scoped>
</style>