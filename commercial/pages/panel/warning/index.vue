<template>
  <div>
    <div class="p-4 border border-3 m-3 pt-5">
      <a
        class="d-flex text-decoration-none text-dark my-2 border-bottom w-25"
        href="#"
      >
        <p></p>
      </a>
      <a
        class="d-flex text-decoration-none text-dark my-2 border-bottom w-25"
        href="#"
      >
        <p></p>
      </a>
      <a
        class="d-flex text-decoration-none text-dark my-2 border-bottom w-25"
        href="#"
      >
        <p></p>
      </a>
      <a
        class="d-flex text-decoration-none text-dark my-2 border-bottom w-25"
        href="#"
      >
        <p></p>
      </a>
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

  methods: {
    all_alert() {
      this.$axios
        .get("")
        .then((this.warning = response.data))

        .catch((erorr) => {
          consol.log(erorr);
        });
    },
  },
};
</script>


<style>
</style>

