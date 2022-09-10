<template>
  <!-- main grid -->
  <div class="main-grid">
    <div class="">
      <div class="row m-0">
        <div class="col-12 col-md-3 p-0">
          <!-- left_pic -->
          <singleGridPic :imgLink="left_pic.imgLink" :color="left_pic.color" :title="left_pic.title"
            :subtitle="left_pic.subtitle" :height="left_pic.height" :is_btn="left_pic.is_btn"
            :img_position="left_pic.img_position" :vertical="left_pic.vertical"></singleGridPic>
          <!--/left_pic -->
        </div>
        <div class="col-12 col-md-9 p-0">
          <div class="row m-0">
            <div class="col-12 col-md-6 p-0">
              <!-- top_right -->
              <singleGridPic :imgLink="top_right.imgLink" :color="top_right.color" :title="top_right.title"
                :subtitle="top_right.subtitle" :height="top_right.height" :is_btn="top_right.is_btn"
                :img_position="top_right.img_position" :vertical="top_right.vertical"></singleGridPic>
              <!--/top_right -->
            </div>
            <div class="col-12 col-md-6 p-0">
              <!-- top_left -->
              <singleGridPic :imgLink="top_left.imgLink" :color="top_left.color" :title="top_left.title"
                :subtitle="top_left.subtitle" :height="top_left.height" :is_btn="top_left.is_btn"
                :img_position="top_left.img_position" :vertical="top_left.vertical"></singleGridPic>
              <!--/top_left -->
            </div>
          </div>
          <div class="row m-0">
            <div class="col-12 col-md-6 p-0">
              <!-- bottom_right -->
              <singleGridPic :imgLink="bottom_right.imgLink" :color="bottom_right.color" :title="bottom_right.title"
                :subtitle="bottom_right.subtitle" :height="bottom_right.height" :is_btn="bottom_right.is_btn"
                :img_position="bottom_right.img_position" :vertical="bottom_right.vertical"></singleGridPic>
              <!--/bottom_right -->
            </div>
            <div class="col-12 col-md-6 p-0">
              <!-- bottom_left -->
              <singleGridPic :imgLink="bottom_left.imgLink" :color="bottom_left.color" :title="bottom_left.title"
                :subtitle="bottom_left.subtitle" :height="bottom_left.height" :is_btn="bottom_left.is_btn"
                :img_position="bottom_left.img_position" :vertical="bottom_left.vertical"></singleGridPic>
              <!--/bottom_left -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/main grid -->
</template>
<script>
import singleGridPic from "./single_grid_pic.vue";

export default {
  data() {
    return {
      /* left pic */ left_pic: {
        imgLink: "https://license-market.ir/uploads/image/rootimage/557/63ce5df4a6b95d049b47c7d6b67e7c4b.png?w=200&h=200",
        color: "#ebf9f7",
        title: "VISA",
        height: "810px",
        subtitle: "کارت اعتباری ارزی",
        is_btn: true,
        img_position: "between",
        vertical: true
      },
      /* top left */ top_left: {
        imgLink: "https://license-market.ir/uploads/image/rootimage/48/6c851670beee739e6548d14e058a6211.png?w=250&h=250",
        color: "#ffbbbb",
        title: "اکانت پریمیوم سرویس NETFLIX",
        height: "400px",
        subtitle: "تخفیف ویژه",
        is_btn: true,
        img_position: "between",
        vertical: false
      },
      /* top right */ top_right: {
        imgLink: "https://license-market.ir/uploads/image/rootimage/36/e6091a1876337ce8cf4342bddb301a45.png?w=200&h=200",
        color: "#d8e2ea",
        title: "+Desney",
        height: "400px",
        subtitle: "اشتراک سرویس های فیلم و سریال",
        is_btn: false,
        img_position: "top",
        vertical: true
      },
      /* bottom right */ bottom_right: {
        imgLink: "https://license-market.ir/uploads/image/rootimage/45/251df750e024609542b4f9cf1b246a04.png?w=250&h=250",
        color: "#e5ffcb",
        title: "پریمیوم سازی اکانت Spotify",
        height: "400px",
        subtitle: "تخفیف ویژه",
        is_btn: true,
        img_position: "between",
        vertical: false
      },
      /* bottom left */ bottom_left: {
        imgLink: "https://license-market.ir/uploads/image/rootimage/37/899c9640dab6af7d6c701c46d94a26aa.png?w=200&h=200",
        color: "#f6d0d7",
        title: "اشتراک پریمیوم اپل موزیک",
        height: "400px",
        subtitle: "Apple Music",
        is_btn: false,
        img_position: "top",
        vertical: true
      },
    };
  },
  components: {
    singleGridPic,
  },
};
</script>
<style scoped>
.main-grid {}
</style>