<template>
  <div>
    <div class="main_nav priority-1">
      <main_nav></main_nav>
    </div>
    <div class="main_div p-1 p-md-5">
      <div class="row m-0">
        <div class="col-12 col-md-0 p-0 text-center priority-1">
          <panel_menu></panel_menu>
        </div>
        <div class="col-12 col-md-12 px-4 text-center">
          <Nuxt />
        </div>
      </div>
    </div>
    <!-- <app_footer></app_footer> -->
  </div>
</template>
<script>
import main_nav from '@/components/panel/main_nav.vue'
import panel_menu from "@/components/menu/panel_menu"

export default {
  middleware: 'auth',
  components: {
    panel_menu,
    main_nav
  },
};
</script>
<style scoped>
.main_div {
  /*  */
}

.main_nav {
  position: sticky;
  top: 0px;
}
</style>
