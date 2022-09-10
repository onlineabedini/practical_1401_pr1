<template>
  <div>
    <!-- <div>
      <app_alert></app_alert>
    </div> -->
    <div class="main_div">
      <div class="container py-5">
        <div class="copy_right">
          © ۱۴۰۱ - تمامی حقوق تجاری و معنوی این سایت محفوظ بوده و هیچ گونه شعبه دیگری ندارد.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import app_alert from '@/components/alert/alert'

export default {
  components: {
    app_alert
  }
}
</script>
<style scoped>
.main_div {
  background-color: black;
  color: white;
}
</style>