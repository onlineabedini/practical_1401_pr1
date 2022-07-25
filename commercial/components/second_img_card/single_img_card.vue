<template>
  <div>
    <div class="p-1">
        <div class="zoom ">
          <img class="card-img-top rounded d-block" :src="card.img" alt="Card image cap" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {};
  },
};
</script>

<style scope>
.zoom {
  position: relative;
  overflow: hidden;
}

.zoom:hover img {
  transform: scale(1.1);
}

.zoom img {
  transition: all 0.3s;
}




</style>