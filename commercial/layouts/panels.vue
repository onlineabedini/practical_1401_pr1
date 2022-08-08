<template>
  <div>
    <div class="row">
      <div class="col-3">
        <menu_panels/>
      </div>
      <div class="col-9">
        <Nuxt/>
      </div>
    </div>
    
  </div>
</template>

<script>
import menu_panels from '@/components/menu/panel_menu/index.vue';
export default {
  components: {
    menu_panels,
  },
   
};
</script>

<style>

</style>