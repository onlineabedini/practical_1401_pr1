<template></template>

<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.login);
    },
  },
};
</script>

<style>
</style>