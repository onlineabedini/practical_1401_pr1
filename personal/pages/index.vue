<template>
  <div class="p-5 text-center">
    <!-- row and col -->
    <div class="row">
      <!-- بخش سمت راست -->
      <div class="border p-3 col-8">
        <div class="border border-dark w-100 p-2">
          <h1>مهارت های من</h1>
        </div>

        <div class="text-end">برنامه نویسی</div>

        <div class="p-5">
          <!-- progress -->
          <div class="my-2 progress">
            A
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 30%"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <!-- progress -->
          <div class="my-2 progress">
            B
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <!-- progress -->
          <div class="my-2 progress">
            C
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <!-- progress -->
          <div class="my-2 progress">
            D
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 30%"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="text-end">مهارت های دیگر</div>

        <div class="p-5">
          <!-- progress -->
          <div class="my-2 progress">
            E
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 65%"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <!-- progress -->
          <div class="my-2 progress">
            F
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 45%"
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="border border-dark w-100 p-2">
          <h1>درباره من</h1>
        </div>

        <div>ّ به دلیل تعریف شدن زبان برنامه نویسی ......</div>

        <div class="border border-dark w-100 p-2">
          <h1>پست های من</h1>
        </div>
        <div class="row">
          <div
            class="p-3 col-4 d-flex"
            v-for="sample in samples"
            :key="sample.id"
          >
            <sample
              :img_url="sample.img_url"
              :title="sample.title"
              :description="sample.description"
            >
            </sample>
          </div>
        </div>
      </div>
      <!-- بخش سمت چپ -->
      <div class="border p-3 col-4">
        <img
          class="img-thumbnail w-100"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  </div>
</template>

<script>
import samples from "~/backend/app/data/sample";
import sample from "./single-sample/sample.vue";
export default {
  components: { sample },
  data() {
    return {
      samples: []
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:2020/api/sample/")
      .then(response => {
        this.samples = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
