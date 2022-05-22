<template>
  <div class="card mb-1">
    <div class="row g-0">
      <div class="col">
        <img :src="cardImage" class="img-fluid rounded-start p-1" alt="image" />
      </div>
      <div class="col-md-8 text-center" >
        <div class="card-body">
          <h6 class="card-title">
            {{ cardTitle }}
          </h6>
          <p class="card-text">
            {{ description }}
          </p>
        </div>
      </div>
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