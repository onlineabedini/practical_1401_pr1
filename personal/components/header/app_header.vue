<template>
  <div>
    <div
      class="
        navbar navbar-expand-lg navbar-light
        shadow-sm
        border-bottom border-2
      "
    >
      <div class="container d-flex flex-column">
        <div class="row">
          <div class="col">
            <h1 class="text-center">وبسایت شخصی مطالعاتی</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="navbar-nav" style="font-family: Verdana">
              <a class="nav-item nav-link active" href="#">خانه</a>
              <a class="nav-item nav-link active" href="#">نمونه کارها</a>
              <a class="nav-item nav-link active" href="#">تماس با من</a>
              <a class="nav-item nav-link active" href="#">وبلاگ</a>
              <a class="nav-item nav-link active" href="#">درباره من</a>
              <a class="nav-item nav-link active" href="#">مهارت‌های من</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "app_header",
};
</script>

<style scoped>
h1 {
  letter-spacing: 15px;
  font-size: 3.5rem;
  font-family: Verdana, Tahoma, sans-serif;
}
</style>