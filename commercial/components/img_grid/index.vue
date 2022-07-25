<template>
  <div>
    <div class="border row p-2 m-0">
      <!-- col1-->
      <div class="col-12 col-sm-3 p-2">
        <div class="a1">
          <snigle_grid_pic :book="books[0]"></snigle_grid_pic>
        </div>
      </div>

      <!-- col2-->
      <div class="col-12 col-sm-9 p-1">
        <!--row 3-->
        <div class="row p-0 m-0">
          <div class="col-12 col-sm-7 col-md-8 col-lg-8 p-1">
            <div class="b1">
              <snigle_grid_pic :book="books[1]"></snigle_grid_pic>
            </div>
          </div>
          <div class="col-12 col-sm-5 col-md-4 col-lg-4 p-1">
            <div class="c1">
              <snigle_grid_pic :book="books[2]"></snigle_grid_pic>
            </div>
          </div>
        </div>
        <!--row 4-->
        <div class="row p-0 m-0">
          <div class="col-12 col-sm-7 col-md-7 col-lg-3 p-1">
            <div class="d1">
              <snigle_grid_pic :book="books[3]"></snigle_grid_pic>
            </div>
          </div>
          <div class="col-12 col-sm-5 col-md-5 col-lg-9 p-1">
            <div class="f1">
              <snigle_grid_pic :book="books[4]"></snigle_grid_pic>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// search props in vue
import snigle_grid_pic from "./single_grid_pic.vue";

export default {
  components: {
    snigle_grid_pic,
  },

  data() {
    return {
      books: [
        {
          postTitle: "کارت اعتباری ارزی",
          title: "visa",
          image:
            "https://license-market.ir/uploads/image/rootimage/557/63ce5df4a6b95d049b47c7d6b67e7c4b.png?w=200&h=200",
        },
        {
          postTitle: "تخفیف ویژه",
          title: "اشتراک پریمیو سرویس",
          image:
            "https://license-market.ir/uploads/image/rootimage/48/6c851670beee739e6548d14e058a6211.png?w=250&h=250",
        },
        {
          postTitle: "اشتراک سرویس فیلم و سایت",
          title: "disney",
          image:
            "https://license-market.ir/uploads/image/rootimage/36/e6091a1876337ce8cf4342bddb301a45.png?w=200&h=200",
        },
        {
          postTitle: "apple music ",
          title: "اشتراک پریمیو اپل موزیک",
          image:
            "https://license-market.ir/uploads/image/rootimage/37/899c9640dab6af7d6c701c46d94a26aa.png?w=200&h=200",
        },
        {
          postTitle: "تخفیف ویژه",
          title: "پریمیو سازی اکانت spotify",
          image:
            "https://license-market.ir/uploads/image/rootimage/45/251df750e024609542b4f9cf1b246a04.png?w=250&h=250",
        },
      ],
    };
  },
};
</script>


<style>
.a1 {
  width: 100%;
  height: 100%;
  background-color: rgb(183, 126, 237);
}

.b1 {
  width: 100%;
  height: 100%;
  background-color: rgb(234, 213, 125);
}

.c1 {
  width: 100%;
  height: 100%;
  background-color: rgb(183, 253, 113);
}

.d1 {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 96, 113);
}

.f1 {
  width: 100%;
  height: 100%;
  background-color: rgb(125, 199, 211);
}
</style>