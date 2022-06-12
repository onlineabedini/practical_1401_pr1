<template>
  <div>
    <handout></handout>
  </div>
</template>

<script>
import handout from "@/components/handout.vue";
export default {
  components: {
    handout,
  head: {
    title: 'Article page',
    meta: [
      {
        hid: 'مقاله ',
        name: 'article',
        content: ' در این صفحه مقالاتی که من در طول پروژه هایم را مورد استفاده کردم  را در اختیار شما همراهان پیج قرار داده ام.  '
      }
    ],
  }  
  },
};
</script>

<style>
</style>