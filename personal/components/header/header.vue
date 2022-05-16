<template>
  <div>
    <div>
      <button v-on:click="say_hello()">click on me</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    say_hello() {
      alert("سلام دوستان عزیزم");
    },
  },
};
</script>

<style scoped>
p {
  color: aqua;
}
</style>