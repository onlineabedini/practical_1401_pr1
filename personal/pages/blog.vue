<template>

<div class="p-5 cards border">
    <div class="text-center">
      <h3>
        <p class="fw-bold" style="font-family:Verdana">وبلاگ</p>
        <hr />
        نوشته‌های مرا در اینستاگرم، توییتر وشبکه‌های اجتماعی دیگر دنبال کنید.
        <hr />
      </h3>
    </div>
    <!-- ............................................ -->

  <div class="row row-cols-4 m-5 p-5">
    <div class="col" v-for="card in cardsList" :key="card.id">
      <cardBlog
        :cardImage="card.cardImage"
        :cardTitle="card.cardTitle"
        :description="card.description"
      ></cardBlog>
    </div>
  </div>
</div>
</template>

<script>
import cardBlog from "~/components/cards/cardBlog.vue";
export default {
  layout() {
    return "cardBlog";
  },
  components: {
    cardBlog,
  },
  data() {
    return {
      cardsList: {
        card1: {
          cardImage: "img/1.jpg",
          cardTitle: "Card title",
          description: "example description 1",
        },
        card2: {
          cardImage: "img/2.jpg",
          cardTitle: "Card title",
          description: "example description 2",
        },
        card3: {
          cardImage: "img/3.jpg",
          cardTitle: "Card title",
          description: "example description 3",
        },
        card4: {
          cardImage: "img/4.jpg",
          cardTitle: "Card title",
          description: "example description 4",
        },
      },
    };
  },
};
</script>

<style>
hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 25%;
  margin-right: 25%;
  border-style: inset;
  border-width: 1px;
}
</style>