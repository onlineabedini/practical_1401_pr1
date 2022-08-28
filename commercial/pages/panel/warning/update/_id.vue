<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="border shadow-sm p-3 d-grid">
        <h3 class="text-end pt-3 mx-4">اطلاعات</h3>
        <div class="mb-3 pt-5 mx-4 w-25 p-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 pt-2 mx-4 w-25 p-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {layout:"panels",
  data() {
    return {
      warning: [],
      id: 1,
      alert: {},
    };
  },
  mounthed() {
    this.id = this.$route.params.id;
  },

  methods: {
    update() {
      this.$axios
        .get("" + this.id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          consol.log(error);
        });
    },
  },
  methods: {
    update() {
      this.$axios
        .put("" + this.warning)
        .then((this.warning = response.data))

        .cath((error) => {
          consol.log(error);
        });
    },
  },
};
</script>

<style>
</style>
