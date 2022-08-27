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
  
  methods: {
    all_alert() {
      this.$axios
        .get("")
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

