<template>
  <div>
    <app_header></app_header>
    <div class="p-5">
      <div class="my-3">
        <div class="d-flex justify-content-center p-2">
          <div class="vr"></div>
        </div>
        <h2 class="text-center">مطالب وبلاگ لایسنس مارکت</h2>
      </div>
      <div class="row p-5">
        <div class="col-md-6 shadow p-3 mb-5 bg-body">
          <div class="p-5">
            <a href="" class="text-decoration-none">
              <h6 class="primary">جدیدترین مطلب</h6>
              <h2 class="text-dark">
                ۱۱ راه داشتن ذهن آرام و بدون استرس(با استرس خداحافظی کنید)
              </h2>
              <br />
              <p class="text-muted">دوشنبه، ۴ بهمن ۱۴۰۰</p>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90"
            alt="" class="img-fluid" />
        </div>
      </div>
      <div>
        <div class="my-3">
          <div class="d-flex justify-content-center p-2">
            <div class="vr"></div>
          </div>
          <h2 class="text-center">مطالب وبلاگ</h2>
        </div>
        <div class="row p-5">
          <div class="col-md-4" v-for="post in posts" :key="post.id">
            <img :src="post.image" alt="" class="card-img-top" />
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
    <app_footer></app_footer>
  </div>
</template>
<script>
import app_header from "@/components/header/index.vue";
import app_footer from "@/components/footer";
export default {
  components: {
    app_header,
    app_footer,
  },
  data() {
    return {
      posts: [
        {
          title: "Product 1",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 2",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 3",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 4",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 5",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 6",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 7",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },

        {
          title: "Product 9",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 10",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 11",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 12",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 13",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
        {
          title: "Product 14",
          image:
            "https://license-market.ir/uploads/image/rootimage/1157/6972a1457a78c1d1a462cd9fb2459aec.jpg?w=700&h=700&q=90",
        },
      ],
    };
  },
};
</script>
<style>
.vr {
  width: 1px;
  height: 35px;
  background-color: black;
}
</style>