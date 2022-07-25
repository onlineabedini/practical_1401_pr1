<template>
  <div>
    <div>
      <h2 class="text-end p-5">{{ textinfo.title_blue }}</h2>
    </div>
    <div>
      <h2 class="text-end">{{ textinfo.textlarg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textinfo: {
        title_blue: "کارت مجازی ویزا (Virtual Prepaid VISA Card):",
        textlarg: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      },
    };
  },
};
</script>

<style>
</style>