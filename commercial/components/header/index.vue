<template>
  <div>
    <!-- <div>
      <app_alert></app_alert>
    </div> -->
    <div class="main_div py-2 px-2">
      <div class="container">
        <div class="row m-0">
          <!-- header title -->
          <div class="title_div text-center col-12 col-md-1 p-0">
            <img class="logo w-100" src="https://my.uupload.ir/dl/n24WeD26" alt="">
          </div>
          <!--/ header title -->
          <!-- menu -->
          <div class="menu_div col-12 col-md-6 col-lg-8 p-0 pe-md-5 text-center text-md-end">
            <main_menu></main_menu>
          </div>
          <!--/ menu -->
          <!-- header profile section -->
          <div class="profile_section col-12 col-md-4 col-lg-3 py-2 px-5 py-md-0 px-md-0 pe-lg-5">
            <header_profile></header_profile>
          </div>
          <!-- /header profile section -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import app_alert from '@/components/alert/alert'
import main_menu from '@/components/menu/main_menu'
import header_profile from './header_profile'

export default {
  data() {
    return {
      header_title: "وبسایت شخصی مطالعاتی",
    }
  },
  components: {
    app_alert,
    main_menu,
    header_profile
  }
}
</script>
<style scoped>
.main_div {
  background-color: black;
  color: white;
  box-shadow: 0px 0px 5px;
}

.title_div {
  /* position: relative; */
}

.title {
  font-size: 20px;
  letter-spacing: 20px;
}

.logo {
  /* width: 100px;
  height: 100px; */
}

.menu_div {
  align-self: center;
}

.profile_section {
  align-self: center;
}

/* mobile size */
@media only screen and (max-width: 500px) {

  .menu_div {
    align-self: center;
    border-top: 1px solid rgba(255, 255, 255, 0.351);
  }

  .profile_section {
    border-top: 1px solid rgba(255, 255, 255, 0.351);
    align-self: center;
  }
}
</style>
