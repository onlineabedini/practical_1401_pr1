<template>
  <div>
    <div class="main_div">
      <h1>ارتباط با من</h1>
      <div class="contact_div text-end mt-5">
        <!-- contact form -->
        <form>
          <div class="my-2 form-group">
            <input type="text" class="form-control" id="name" placeholder="نام و نام خانوادگی خود را وارد کنید">
          </div>
          <div class="my-2 form-group">
            <input type="email" class="form-control" id="email" placeholder="ایمیل خود را وارد کنید">
          </div>
          <div class="my-2 form-group">
            <textarea class="form-control" id="message" rows="3"
              placeholder="پیام خود را در این بخش وارد کنید."></textarea>
          </div>
          <button type="submit" class="btn btn-primary">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "pages",
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
</style>
