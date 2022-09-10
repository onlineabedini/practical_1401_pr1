<template>
  <div class="row">
    <!-- image grid -->
    <div class="col-12 col-md-8 p-3">
      <!-- skills -->
      <div>
        <div class="topic text-start p-2 rounded fw-bold">مهارت های من</div>
        <!-- skills process bar + titles -->
        <div class="my-3 fw-bold">برنامه نویسی</div>
        <div class="progess_div progress my-1">
          <span class="progess_label">vue js</span>
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 80%"></div>
        </div>
        <div class="progess_div progress my-1">
          <span class="progess_label">Nuxt js</span>
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div>
        </div>

        <div class="my-3 fw-bold">مهارت های دیگر</div>
        <div class="progess_div progress my-1">
          <span class="progess_label">فن بیان</span>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
        </div>
        <div class="progess_div progress my-1">
          <span class="progess_label">زبان انگلیسی</span>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div>
        </div>
        <div class="progess_div progress my-1">
          <span class="progess_label">مدیریت اسکرام</span>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 30%"></div>
        </div>
      </div>
      <!--/ skills -->
      <!-- about -->
      <div class="py-5">
        <div class="topic text-start p-2 rounded fw-bold mb-3">درباره من</div>
        <div class="about_me">
          به دلیل تعریف شدن برنامه نویسی با استفاده از کد های زیبا و ساده برای ساخت برنامه های خود به دنبال برنامه
          نویسی با
          استفاده از کد های زیبا و ساده برای ساخت برنامه های خود به دنبال برنامه نویسی با استفاده از کد های زیبا و
          ساده برای ساخت برنامه های خود به دنبال برنامه نویسی با استفاده از کد های زیبا و ساده برای ساخت برنامه های
          خود به
          دنبال برنامه نویسی با استفاده از کد های زیبا و ساده برای ساخت برنامه های خود به دنبال
        </div>
      </div>
      <!--/ about -->
      <!-- blogs -->
      <div class="row m-0">
        <div class="topic text-start p-2 rounded fw-bold">پست های وبلاگ</div>
        <div class="col-12 col-md-3 p-1" v-for="blog in blogs" :key="blog.name" @click="show_article(blog.id)">
          <blog_card class="" :img_url="blog.img_url" :title="blog.title" :description="blog.description">
          </blog_card>
        </div>
      </div>
      <!--/ blogs -->
    </div>
    <!--/ image grid -->
    <!-- samples div -->
    <div class="col-12 col-md-4 text-start p-3">
      <div class="slide-nav rounded p-1">
        <div class="">
          <image_grid></image_grid>
        </div>
        <div class="mt-2">
          <div class="mt-1" v-for="sample in samples" :key="sample.id" @click="show_sample(sample.id)">
            <sample_card :img_url="sample.img_url" :title="sample.title" :description="sample.description">
            </sample_card>
          </div>
        </div>
      </div>
    </div>
    <!--/ samples div -->
  </div>
</template>
<script>
import image_grid from "@/components/img_grid";
import sample_card from "@/components/cards/sample_card";
import blog_card from '@/components/cards/blog_card'

export default {
  data() {
    return {
      samples: {},
      blogs: {}
    }
  },
  components: {
    image_grid,
    sample_card,
    blog_card
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
  box-shadow: 0px 0px 5px #198754;
}

.topic {
  box-shadow: 0px 0px 5px #198754;
}
</style>
