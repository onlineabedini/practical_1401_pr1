<template>
  <div>
    <div class="p-5">
      <div class="row">
        <div class="col-8 border p-4">
          <!-- progress div  -->
          <div class="border p-4">
            <div class="border border-3 rounded"><h4>مهارت های من</h4></div>

            <div class="progress my-2 ">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 10%"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-2">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 10%"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-2">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 10%"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-2">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 10%"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress my-2">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style="width: 10%"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <!-- about div  -->
          <div class="border my-2 p-4">
            <div class="border border-3 rounded"><h4>درباره ی من</h4></div>
            <div class="py-2"><p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p></div>
          </div>
          <div class="border p-4">
            <div class="border border-3 rounded"><h4>پست‌های وبلاگ</h4></div>
            <div class="row row-cols-4 py-4">
              <div class="col" v-for="card in cardsList" :key="card.id">
                <cardBlog
                  :cardImage="card.cardImage"
                  :cardTitle="card.cardTitle"
                  :description="card.description"
                ></cardBlog>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 border">
          <img
            class="img-thumbnail"
            src="https://www.talab.org/wp-content/uploads/2018/11/1279485741-talab-org.jpg"
            alt="این یه عکس است"
          />
          <div>
            <div v-for="card in cardsList" :key="card.id">
              <cardSample
                :cardImage="card.cardImage"
                :cardTitle="card.cardTitle"
                :description="card.description"
              ></cardSample>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cardSample from "@/components/cards/cardSample.vue";
import cardBlog from "~/components/cards/cardBlog.vue";
export default {
  layout() {
    return "index";
  },
  components: {
    cardSample,
    cardBlog,
  },
  data() {
    return {
      cardsList: {
        card1: {
          cardImage: "img/1.jpg",
          cardTitle: "Card title 1",
          description: "example description 1",
        },
        card2: {
          cardImage: "img/2.jpg",
          cardTitle: "Card title 2",
          description: "example description 2",
        },
        card3: {
          cardImage: "img/3.jpg",
          cardTitle: "Card title 3",
          description: "example description 3",
        },
        card4: {
          cardImage: "img/3.jpg",
          cardTitle: "Card title 4",
          description: "example description 4",
        },
      },
    };
  },
};
</script>
<style scoped>
</style>