<template>
  <div>
    <div class="main_div">
      <h1>مهارت های من</h1>
      <hr />
      <h5>
        مهارت های من در این بخش قابل نمایش است
      </h5>
      <hr>
      <div>
        <!-- skills process bar + titles -->
        <div class="my-3 fw-bold">برنامه نویسی</div>
        <div class="progess_div progress my-1">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div><span class="progess_label">HTML</span>
        </div>
        <div class="progess_div progress my-1">

          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div><span class="progess_label">Css</span>
        </div>
        <div class="progess_div progress my-1">

          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div><span class="progess_label">Bootstrap</span>
        </div>
        <div class="progess_div progress my-1">

          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div><span class="progess_label">javascript</span>
        </div>
        <div class="progess_div progress my-1">

          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 80%"></div><span class="progess_label">vue js</span>
        </div>
        <div class="progess_div progress my-1">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div><span class="progess_label">Nuxt js</span>
        </div>

        <div class="my-3 fw-bold">مهارت های دیگر</div>
        <div class="progess_div progress my-1">

          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div><span
            class="progess_label">فن
            بیان</span>
        </div>
        <div class="progess_div progress my-1">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 25%"></div><span
            class="progess_label">زبان
            انگلیسی</span>
        </div>
        <div class="progess_div progress my-1">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success text-end" role="progressbar"
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 30%"></div><span
            class="progess_label">مدیریت اسکرام</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "pages",
  data() {
    return {
      skills: {
        skill1: {
          title: "html",
          value: 75
        },
        skill2: {
          title: "css",
          value: 75
        },
        skill3: {
          title: "javascript",
          value: 75
        },
        skill4: {
          title: "vue",
          value: 75
        },
      }
    }
  },
}
</script>
<style scoped>
.main_div {
  text-align: center;
}

hr {
  width: 70%;
  margin: auto;
}

.progess_div {
  margin: auto;
  width: 70%;
  height: 30px;
  position: relative;
}

.progess_label {
  font-size: 16px;
  font-weight: bold;
  margin-inline: 20px;
  align-self: center;
  position: absolute;
  color: white;
}
</style>
