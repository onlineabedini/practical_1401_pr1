<template>
  <div>
    <div class="border mx-4 pt-5 shadow-sm p-3 mb-5 bg-body rounded">
      <div class="mb-3 pt-5 mx-4 w-25 p-3">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input
          type="id"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
      <div class="mb-3 pt-3 mx-4 w-25 p-3">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      warning:[],
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
        .then(this.warning=response.data) 
          
        
        .cath((error) => {
          consol.log(error);
        });
    },
  },
};
</script>

<style></style>
