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
   <!-- <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="a5cc0437-f2f7-4098-b3ae-dd0d372d13be";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> -->
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