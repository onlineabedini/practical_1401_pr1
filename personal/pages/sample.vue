<template>
  <div class="p-5 cards border" >
    <div class=" text-center ">
      <h3>
        <hr />
        نوشته‌های مرا در اینستاگرم، توییتر وشبکه‌های اجتماعی دیگر دنبال کنید.
        <hr />
      </h3>
    </div>
    <!-- ............................................ -->
    <div class="row p-5">
      <div v-for="card in cardsList" :key="card.id">
        <cardSample
          :cardImage="card.cardImage"
          :cardTitle="card.cardTitle"
          :description="card.description"
        ></cardSample>
      </div>
    </div>
  </div>
</template>

<script>
import cardSample from "@/components/cards/cardSample.vue";
export default {
  components: {
    cardSample,
  },
  data() {
    return {
      cardsList: {
        card1: {
          cardImage: "img/1.jpg",
          cardTitle: "Card title",
          description: "example description",
        },
        card2: {
          cardImage: "img/2.jpg",
          cardTitle: "Card title",
          description: "example description",
        },
        card3: {
          cardImage: "img/3.jpg",
          cardTitle: "Card title",
          description: "example description",
        },
      },
    };
  },
};
</script>

<style scoped>
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