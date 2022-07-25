<template>
  <div>
    <div class="card p-1 border border-white" style="width: 28rem">
      <h3 class="text-end" v-if="card.offer">
        <button class="btn btn-danger t4 text-center p-0">
          {{ card.offer }}
        </button>
      </h3>

      <div class="zoom">
        <h2 class="text-start">
          <button class="btn btn-secondary btn-sm t5 text-center">
            {{ card.plus }}
          </button>
        </h2>
        <img :src="card.img" class="card-img-top rounded d-block" />
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text t2">
          <s class="t3">{{ card.off }}</s
          >{{ card.text }}
        </p>
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
.t2 {
  font-weight: 600;
}

.t3 {
  color: rgb(189, 49, 49);
}

.t4 {
  width: 20%;
  font-weight: 800;
}

.t5 {
  width: 10%;
  height: 10%;
  top: 20%;
}

.zoom {
  position: relative;
  overflow: hidden;
}

.zoom:hover img {
  transform: scale(1.1);
}

.zoom:hover plus {
  transform: scale(1.1);
}

.zoom img {
  transition: all 0.3s;
}

.zoom plus {
  transition: all 0.3s;
}
</style>