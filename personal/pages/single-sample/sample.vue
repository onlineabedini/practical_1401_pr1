<template>
  <div>
    <div
      class="
        border border-secondary
        p-1
        m-3
        rounded-3
        shadow-lg
        p-3
        mb-5
        bg-body
        rounded
        mx-auto
      "
    >
      <img
        class="
          img-thumbnail
          rounded
          mx-auto
          d-block
          p-3
          mb-2
          bg-secondary
          text-white
        "
        :src="sample.image"
      />
      <div
        class="
          text-center
          border-bottom border-top border-danger border-3
          text-warning
          bg-dark
          w-50
          mx-auto
        "
      >
        <h3>{{ sample.title }}</h3>
      </div>

      <div class="w-50 mx-auto text-center p-3">
        <p class="p1">
          {{ sample.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample: [],
      id: 201,
    };
  },
  mounted() {
    // this.id = this.$route.params.id;
    this.$axios
      .get("http://localhost:2020/api/sample/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.sample = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.p1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>