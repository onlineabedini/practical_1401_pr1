<template>
  <div>
    <div class="row bg-white p-5 d-flex m-0">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="d-flex justify-content-start">
          <img
            src="https://license-market.ir/uploads/image/rootimage/613/e231fb8a9aed178122ff4613cd9b046e.png?w=350&h=350"
            class="w-25 mx-3" alt="..." />
          <img
            src="https://license-market.ir/uploads/image/rootimage/612/912c4c563605c45d7d7d900d66d7b7c0.png?w=350&h=350"
            class="w-25" alt="..." />
          <img
            src="https://license-market.ir/uploads/image/rootimage/611/e83526b300eee66c9e36ba7a52017b01.png?w=350&h=350"
            class="w-25 mx-3" alt="..." />
          <img
            src="https://license-market.ir/uploads/image/rootimage/610/023ff52b20228659586364e476be4ecb.png?w=350&h=350"
            class="w-25" alt="..." />
        </div>
      </div>
      <div class="col-2 m-0"></div>
    </div>
    <div class="row">
      <div class="col-5">
        <img
          src="https://license-market.ir/uploads/image/rootimage/792/edffd259d098ee3385c6f981bc75c6e7.png?w=800&h=800"
          class="rounded float-end" alt="این یه عکس " />
      </div>
      <div class="col-7">
        <button type="button" class="btn btn-info rounded-pill mt-5">
          خدمات
        </button>
        <button type="button" class="btn rounded-pill mt-5 ms-2">
          صفحه اصلی
        </button>
        <button type="button" class="btn rounded-pill mt-5 me-2">
          {{ cardInformation.link }}
        </button>
        <h3 class="mt-3">{{ cardInformation.cardTitle }}</h3>
        <h3 class="mt-3 text-danger">{{ cardInformation.cardPrice }}</h3>
        <!-- Example single danger button -->
        <div class="d-flex w-100">
          <div class="ms-5 mt-5">
            <p class="fs-5 fw-bold">@@@@@@</p>
            <button type="button" class="btn dropdown-toggle text-muted fs-4 ms-5 border border-secondary">$$$$$$</button>
          </div>
          <div class="me-5 mt-5">
            <p class="fs-5 fw-bold">@@@@@@</p>
            <button type="button" class="btn dropdown-toggle text-muted fs-4 ms-5 border border-secondary">$$$$$$$</button>
          </div>
        </div>
        <div class="d-inline">
          <button type="button" class="btn btn-danger btn-lg w-25 rounded-pill mt-5">خرید</button>
          <div class="float-start mt-5 ms-5">
            <i class="fab fa-telegram-plane text-muted mx-2"></i>
            <i class="fab fa-whatsapp text-muted"></i>
            <i class="fab fa-facebook-f text-muted mx-2"></i>
            <i class="fab fa-instagram text-muted"></i>
            <i class="fab fa-twitter text-muted mx-2"></i>
            <i class="fab fa-youtube text-muted"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardInformation: {
        cardTitle: `خرید اکانت دیزنی پلاس Disney Plus ایمیل شما `,
        cardPrice: `59000 تومان`,
        cardImage: `https://license-market.ir/uploads/image/rootimage/792/edffd259d098ee3385c6f981bc75c6e7.png?w=800&h=800`,
        description: `description`,
        imgDescription: ` imgDescription`,
        link: "مستند",
      },
    };
  },
};
</script>
<style></style>