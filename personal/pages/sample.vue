<template>
  <div class="container p-5 cards border">
    <div class="row">
      <div class="col-3"
       v-for="card in cardsList" :key="card.cardTitle">
        <cardSample :cardImage="card.cardImage"
          :cardTitle="card.cardTitle"
          :decription="card.decription"></cardSample>
      </div>
    </div>
  </div>
</template>

<script>
import cardSample from "~/components/cards/cardSample.vue";
export default {
  name: "cardSample",
  components: {
    cardSample,
  },
  data() {
    return {
      cardsList: {
        card1: {
          cardImage: "@/static/img/1.jpg",
          cardTitle: "Card title",
          decription: "example description",
        },
        card2: {
          cardImage: "@/static/img/2.jpg",
          cardTitle: "Card title",
          decription: "example description",
        },
        card3: {
          cardImage: "@/static/img/3.jpg",
          cardTitle: "Card title",
          decription: "example description",
        },
      },
    };
  },
};
</script>

<style scoped>
</style>