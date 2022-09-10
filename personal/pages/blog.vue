<template>
  <div>
    <div class="main_div">
      <h1>وبلاگ</h1>
      <hr />
      <h5>
        نوشته های مرا در اینستاگرام، توییتر و شبکه های اجتماعی دیگر دنبال کنید
      </h5>
      <hr>
      <div class="row my-5">
        <div class="col-12 col-md-3 my-2" v-for="blog in blogs" :key="blog.name">
          <blog_card :img_url="blog.img_url" :title="blog.title" :description="blog.description">
          </blog_card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blog_card from '@/components/cards/blog_card'

export default {
  layout: "pages",
  components: {
    blog_card
  },
  data() {
    return {
      blogs: {}
    }
  },
  mounted() {
    // get blogs 
    this.$axios.get('/article')
      .then(response => {
        this.blogs = response.data
      })
      .catch(error => {
        console.log(error)
      })
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
