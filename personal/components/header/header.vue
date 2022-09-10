<template>
  <div>
    <div class="background p-5">
      <div class="main_div">
        <!-- header title -->
        <div class="title_div text-center">
          <h1 class="title m-0">{{ header_title }}</h1>
        </div>
        <!--/ header title -->

        <!-- menu -->
        <div class="text-center">
          <div class="p-0 m-0">
            <ul class="header-nav nav">
              <li class="nav-item" v-for="link in links" :key="link.name">
                <nuxt-link class="header-nav-link nav-link" :to="link.url">{{ link.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <!--/ menu -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      header_title: "وبسایت شخصی مطالعاتی",
      links: {
        // home
        link1: {
          title: "خانه",
          url: "/"
        },
        // samples
        link2: {
          title: "نمونه کارها",
          url: "/samples"
        },
        // contact
        link3: {
          title: "تماس با من",
          url: "/contact"
        },
        // weblog
        link5: {
          title: "وبلاگ",
          url: "/blog"
        },
        // about
        link6: {
          title: "درباره من",
          url: "/about"
        },
        // skill
        link7: {
          title: "مهارت های من",
          url: "/skills"
        },
      },
    }
  },
}
</script>
<style scoped>
.background {
  background-color: white;
  color: black;
  box-shadow: 0px 0px 5px;
}

.main_div {
  /** */
}

.title_div {
  position: relative;
}

.title {
  font-size: 60px;
  letter-spacing: 20px;
}

.header-nav {
  display: inline-flex;
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
}

.header-nav-link {
  color: black;
  cursor: pointer;
}
</style>
