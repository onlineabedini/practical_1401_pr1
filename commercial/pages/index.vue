<template>
<<<<<<< HEAD

    <index></index>

</template>

<script>

import Index from '@/components/img_grid/index.vue';
export default {
  layout() {
    return "single_grid_pic";
  },
  components: {
    Index,
  },
};
</script>

<style scoped>
=======
<div>
  <index></index>
  <app_footer></app_footer>
</div>
  
</template>

<script>
import index from "@/components/header/index.vue"
import app_footer from '@/components/footer'
export default {
  components :{
    index,
    app_footer
  }

}
</script>

<style>

>>>>>>> d2ff68483f75f8e8377bce685986dd43c97fc431
</style>