<template>
  <div>
    <div
      class="
        navbar navbar-expand-lg navbar-light
        shadow-sm
        border-bottom border-2
      "
    >
      <div class="container d-flex flex-column">
        <div class="row">
          <div class="col">
            <h1 class="text-center">وبسایت شخصی مطالعاتی</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="navbar-nav" style="font-family: Verdana">
              <ul class="header-nav nav">
                <li class="nav-item" v-for="link in links" :key="link.name">
                  <nuxt-link class="header-nav-link nav-link" :to="link.url">
                    {{ link.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "app_header",
  data() {
    return {
      links: {
        link1: {
          name: "خانه",
          url: "/",
        },
        link2: {
          name: "نمونه کارها",
          url: "/sample",
        },
        link3: {
          name: "تماس با من",
          url: "/contact",
        },
        link4: {
          name: "وبلاگ",
          url: "/blog",
        },
        link5: {
          name: "درباره من",
          url: "/about",
        },
        link6: {
          name: "مهارت‌های من",
          url: "/skills",
        },
      },
    };
  },
};
</script>

<style scoped>
h1 {
  letter-spacing: 15px;
  font-size: 3.5rem;
  font-family: Verdana, Tahoma, sans-serif;
}
</style>