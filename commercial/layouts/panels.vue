<template>
  <div>
    <div class="row p-3">
      <panel_header></panel_header>
    </div>
    <div class="row">
      <div class="col-3">
        <menu_panels/>
      </div>
      <div class="col-9">
        <Nuxt/>
      </div>
      <div class="row p-4">
        <h5>
          حق کپی رایت کسی نداره 
        </h5>
      </div>
    </div>
    
  </div>
</template>

<script>
import menu_panels from '@/components/menu/panel_menu/index.vue';
import Panel_header from '~/components/header/panel_header.vue';
export default {
  components: {
    menu_panels,
    Panel_header,
  },
   
};
</script>

<style>

</style>