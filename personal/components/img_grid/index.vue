<template>
  <!-- main grid -->
  <div class="main-grid">
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-6 p-0">
          <!-- lp_1_1 -->
          <singleGridPic :imgLink="lp_1_1.imgLink" :color="lp_1_1.color" :title="lp_1_1.title" :height="lp_1_1.height">
          </singleGridPic>
          <!--/lp_1_1 -->
          <!-- lp_2_1 -->
          <singleGridPic :imgLink="lp_2_1.imgLink" :color="lp_2_1.color" :title="lp_2_1.title" :height="lp_2_1.height">
          </singleGridPic>
          <!--/lp_2_1 -->
        </div>
        <div class="col-6 p-0">
          <!-- lp_1_1 -->
          <singleGridPic :imgLink="lp_1_2.imgLink" :color="lp_1_2.color" :title="lp_1_2.title" :height="lp_1_2.height">
          </singleGridPic>
          <!--/lp_1_1 -->
          <!-- lp_2_1 -->
          <singleGridPic :imgLink="lp_2_2.imgLink" :color="lp_2_2.color" :title="lp_2_2.title" :height="lp_2_2.height">
          </singleGridPic>
          <!--/lp_2_1 -->
        </div>
      </div>
    </div>
  </div>
  <!--/main grid -->
</template>
<script>
import singleGridPic from "./singleGridPic.vue";

export default {
  data() {
    return {
      /*------------------------------------------------------------------------------------------*/
      /* lp_1_1 */ lp_1_1: {
        imgLink: "/img/2.jpg",
        color: "#00000098",
        title: "پروژه",
        height: "200px",
      },
      /* lp_2_1 */ lp_2_1: {
        imgLink: "img/3.jpg",
        color: "#00000098",
        title: "دانشگاه",
        height: "200px",
      },
      /*------------------------------------------------------------------------------------------*/
      /* lp_1_1 */ lp_1_2: {
        imgLink: "img/4.jpg",
        color: "#00000098",
        title: "مقاله",
        height: "200px",
      },
      /* lp_2_1 */ lp_2_2: {
        imgLink: "img/5.jpg",
        color: "#00000098",
        title: "سرگرمی",
        height: "200px",
      },
      /*------------------------------------------------------------------------------------------*/
    };
  },
  components: {
    singleGridPic,
  },
};
</script>
<style scoped>
.main-grid {
  padding: 1px;
}
</style>