<template>
  <div>

    <!-- img grid -->
    <div>
      <image_grid></image_grid>
    </div>

    <!-- product grid -->
    <div>
      <product_grid grid_cards="popular"></product_grid>
    </div>

    <!-- product grid -->
    <div>
      <product_grid grid_cards="film"></product_grid>
    </div>

    <!-- product grid -->
    <div>
      <product_grid grid_cards="music"></product_grid>
    </div>

    <!-- product grid -->
    <div>
      <product_grid grid_cards="special"></product_grid>
    </div>

    <!-- product grid -->
    <div>
      <product_grid grid_cards="education"></product_grid>
    </div>

    <!-- comment section -->
    <div>
      <comments_grid></comments_grid>
    </div>

    <!-- articles grid -->
    <div>
      <article_grid></article_grid>
    </div>

    <!-- second img grid -->
    <div>
      <second_img_grid></second_img_grid>
    </div>

  </div>
</template>
<script>
import image_grid from "@/components/img_grid";
import product_grid from "@/components/commerce_components/products_grid";
import second_img_grid from "@/components/second_img_grid"
import comments_grid from "@/components/comments_grid";
import article_grid from "@/components/article_grid";

export default {
  data() {
    return {
      samples: {},
      blogs: {}
    }
  },
  components: {
    image_grid,
    product_grid,
    second_img_grid,
    comments_grid,
    article_grid
  },
  mounted() {
    // get samples 
    this.$axios.get('/sample')
      .then(response => {
        this.samples = response.data
        console.log(this.samples)
      })
      .catch(error => {
        console.log(error)
      })

    // get blogs 
    this.$axios.get('/article')
      .then(response => {
        this.blogs = response.data
        console.log(this.blogs)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    show_article(id) {
      this.$router.push('/article/' + id)
    },

    show_sample(id) {
      this.$router.push('/sample/' + id)
    }
  }
};
</script>
<style>
.progess_div {
  margin: auto;
  width: 70%;
  height: 30px;
  position: relative;
}

.progess_label {
  font-size: 16px;
  font-weight: bold;
  margin-inline: 20px;
  align-self: center;
  position: absolute;
  color: white;
}

.about_me {
  text-align: justify;
}

.slide-nav {
  /* box-shadow: 0px 0px 5px #198754; */
}

.topic {
  /* box-shadow: 0px 0px 5px #198754; */
}
</style>
