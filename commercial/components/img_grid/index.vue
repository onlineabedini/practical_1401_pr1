<template>
  <div class="row m-5 p-5">
    <div class="col-md-8 p-1">
      <!-- col1 -->
      <a href="#" class="row text-decoration-none">
        <div class="col-md-4 p-1 ">
          <div class="a1">
            <single_grid_pic :item="items[0]" img_position="top" class="d-table p-4"></single_grid_pic>
          </div>
        </div>
        <div class="col-md-8 p-1 ">
          <div class="b1">
            <single_grid_pic :item="items[1]" img_position="left" class="p-2 "></single_grid_pic>
            <div class="btn rounded-pill btn-light d-grid col-md-3 ">مشاهده و خرید</div>
          </div>
        </div>
      </a>
      <a href="#" class="row text-decoration-none">
        <div class="col-md-8 p-1">
          <div class="c1">
            <single_grid_pic :item="items[2]" img_position="left" class="d-flex justify-content-center">
            </single_grid_pic>
            <div class="btn rounded-pill btn-light d-grid col-md-3 ">مشاهده و خرید</div>
          </div>
        </div>
        <div class="col col-md-4 p-1">
          <div class="d1">
            <single_grid_pic :item="items[3]" img_position="top" class="d-table p-5"></single_grid_pic>
          </div>
        </div>
      </a>
    </div>
    <!-- col2 -->
    <a href="#" class="col-md-4 p-2 text-decoration-none">
      <div class="f1">
        <single_grid_pic :item="items[4]" img_position="left" class="d-table p-5"></single_grid_pic>
        <div class="btn rounded-pill btn-light d-grid col-md-4 ">مشاهده و خرید</div>
      </div>
    </a>
  </div>
</template>
<script>
import single_grid_pic from "@/components/img_grid/single_grid_pic.vue";
export default {
  components: {
    single_grid_pic,
  },
  data() {
    return {
      items: [
        {
          cardTitle: "اشتراک سرویس های فیلم و سریال",
          text: "Disney+",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/36/e6091a1876337ce8cf4342bddb301a45.png?w=400&h=400",
        },
        {
          cardTitle: "تخفیف ویژه ",
          text: "اکانت پرمیوم Netflix",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/48/6c851670beee739e6548d14e058a6211.png?w=500&h=500",
        },
        {
          cardTitle: "تخفیف ویژه ",
          text: " پرمیوم سازی اکانت اسپاتیفای",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/45/251df750e024609542b4f9cf1b246a04.png?w=500&h=500",
        },
        {
          cardTitle: "Apple music",
          text: "اشتراک پرمیوم اپل موزیک ",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/37/899c9640dab6af7d6c701c46d94a26aa.png?w=400&h=400",
        },
        {
          cardTitle: "کارت ارتباط ارزی",
          text: "visa ",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/557/63ce5df4a6b95d049b47c7d6b67e7c4b.png?w=400&h=400",
        },
      ],
    };
  },
};
</script>
<style>
.a1 {
  background-color: #c2c2c2;
  border-radius: 10px;
  height: 100%;
}
.b1 {
  background-color: #f58894;
  border-radius: 10px;
  height: 100%;
}
.c1 {
  background-color: #e5ffcb;
  border-radius: 10px;
  height: 100%;
}
.d1 {
  background-color: #f6d0d7;
  border-radius: 10px;
  height: 100%;
}
.f1 {
  background-color: #ebf9f7;
  height: 100%;
  border-radius: 10px;
  vertical-align: top;
}
</style>