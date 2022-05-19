<template>
  <div>
    <div>
      <img :src="cardImage" class="card-img img-size mx-4" alt="image" />
    </div>

    <div>
      <h6 class="card-title title-align">
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