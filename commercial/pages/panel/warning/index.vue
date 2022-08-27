<template></template>

<script>
export default {
  data() {
 return{
     warning:[],
      id: 1,
      alert: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    all_alert() {
      this.$axios
        .get("" + this.id)
        .then(this.warning=response.data) 
        
        .catch((erorr) => {
       consol.log(erorr);
        });
    },
  },
};
</script>

<style>
</style>

