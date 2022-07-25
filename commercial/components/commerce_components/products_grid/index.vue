<template>
  <div>
    <!--row1-->
    <div class="row text-center p-4">
      <h2>محصولات پرفروش</h2>
    </div>
    <!--row2-->
    <div class="row p-1">
      <!--col1-->
      <div class="col-12 col-sm-3 col-md-3 col-lg-3 p-5 text-center">
        <single_card :card="cards[0]"></single_card>
      </div>

      <!--col2-->
      <div class="col-12 col-sm-3 col-md-3 col-lg-3 p-0 text-center">
        <single_card :card="cards[1]"></single_card>
      </div>

      <!--col3-->
      <div class="col-12 col-sm-3 col-md-3 col-lg-3 p-0 text-center">
        <single_card :card="cards[2]"></single_card>
      </div>

      <!--col4-->
      <div class="col-12 col-sm-3 col-md-3 col-lg-3 p-5 text-center">
        <single_card :card="cards[3]"></single_card>
      </div>
    </div>
  </div>
</template>

<script>
import single_card from "./single_card.vue";
export default {
  components: {
    single_card,
  },
  data() {
    return {
      cards: [
        {
          img: "https://license-market.ir/uploads/image/rootimage/787/129abeec0df5669cd9e6695ad5a22d5a.png?w=400&h=400&q=90",
          title: "خرید اکانت اسپاتیفای  پرمیوم ارزان",
          text: "67/000 تومان",
          plus: "+",
        },

        {
          img: "https://license-market.ir/uploads/image/rootimage/781/9ad95722c06f0fed59bb8d6fce2bd1e8.png?w=400&h=400&q=90",
          title: "خرید اکانت نتفلیکس  آمریکا ارزان",
          text: "78/000 تومان",
          off: "58/000 تومان",
          offer: "تخفیف",
          plus: "+",
        },

        {
          img: "https://license-market.ir/uploads/image/rootimage/713/0312dbdb07cd66970449af4f28faffb0.png?w=400&h=400&q=90",
          title: "خرید اکانت  کانوا ارزان قابل تمدید",
          text: "25/000 تومان",
          off: "20/000 تومان",
          offer: "تخفیف",
          plus: "+",
        },

        {
          img: "https://license-market.ir/uploads/image/rootimage/771/e9422da376132fc726204dd1ad00472e.png?w=400&h=400&q=90",
          title: "اشتراک پریمیوم  (گرامرلی) - قابل تمدید",
          text: "54/000 تومان",
          plus: "+",
        },
      ],
    };
  },
};
</script>

<style>
</style>