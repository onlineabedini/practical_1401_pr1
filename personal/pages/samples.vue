<template>
  <div>
    <div class="main_div">
      <h1>نمونه کارهای من</h1>
      <hr />
      <h5>
        نوشته های مرا در اینستاگرام، توییتر و شبکه های اجتماعی دیگر دنبال کنید
      </h5>
      <hr>
      <div class="py-5">
        <div>
          <sample_card class="my-3" v-for="sample in samples" :key="sample.id" :img_url="sample.img_url"
            :title="sample.title" :description="sample.description"></sample_card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sample_card from "@/components/cards/sample_card";

export default {
  layout: "pages",
  data() {
    return {
      samples: {}
    }
  },
  components: {
    sample_card
  },
  mounted() {
    // get samples 
    this.$axios.get('/sample')
      .then(response => {
        this.samples = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
};
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
