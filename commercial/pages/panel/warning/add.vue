<template>
  <div>
    <div class="pt-5"></div>
    <div class="shadow p-3 mb-5 bg-body rounded pt-5 mx-4">
      <h3 class="mx-4">اعلانات</h3>
      <div class="pt-5"></div>
      <div class="shadow-none p-2 mb-5 bg-info rounded mx-4">
        <input v-modal="alert.message" />
        <p class="fs-5 pt-5 mx-4">اطلاع از بروزرسانی ها در تلگرام</p>
        <p class="mx-4">
          برای اطلاع از بروزرسانی افزونه ها، در کانال تلگرام ?? عضو شوید
        </p>
      </div>
      <div class="d-flex justify-content-end mx-4 pt-2">
        <button type="button" class="btn btn-primary">تایید اطلاعات</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      alert: {
        message: "",
      },
    };
  },
  methods: {
    add() {
      this.$axios
        .post("http://localhost:8080/api/user/creat", this.alert)
        .then((Response) => {
          console.log(Response);
        })

        .catch((error) => {
          consol.log(error);
        });
    },
  },
};
</script>

<style>
</style>