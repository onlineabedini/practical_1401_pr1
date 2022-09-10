<template>
  <div>
    <div class="main_div">
      <!-- articles grid -->
      <div>
        <article_grid></article_grid>
      </div>
    </div>
  </div>
</template>
<script>
import article_grid from "@/components/article_grid";

export default {

  layout: "pages",
  components: {
    article_grid
  },
  data() {
    return {

    }
  },
  mounted() {
    // get blogs 
    // this.$axios.get('/article')
    //   .then(response => {
    //     this.blogs = response.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
</script>
<style scoped>
.main_div {
  text-align: center;
}

hr {
  width: 70%;
  margin: auto;
}
</style>
