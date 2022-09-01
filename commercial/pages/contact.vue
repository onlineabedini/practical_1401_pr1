<template>
  <div>
   <h3 class="my-4 pt-5 text-center-right container-lg">ارتباط با ما</h3>
   <div class="border border-3 shadow rounded-3 p-3">
      <div class="row px-3 pt-3 d-flex justify-content-center">
        <input class="col-4 col-md-3 m-3" type="text" placeholder="نام" v-model="user_info.name">
        <input class="col-4 col-md-3 m-3" type="text" placeholder="نام خانوادگی" v-model="user_info.lastname">
        <input class="col-4 col-md-3 m-3" type="text" placeholder="ایمیل" v-model="user_info.email">
        <input class="col-4 col-md-3 m-3" type="text" placeholder="شماره تلفن همراه" v-model="user_info.phonenumber" >
        <input class="col-4 col-md-3 m-3" type="text" placeholder="پیام خود را وارد کنید" v-model="user_info.message">
        <input class="col-4 col-md-3 m-3" type="text" placeholder="">
      </div>
      <div class="mx-3">
        <button class="btn btn-primary mx-3" type="button" @click="submit()">
         ثبت
        </button>
    </div>
    
   </div>
   <div class="m-4">
     <a href="#" class="text-black pe-4"><i class="fab fa-telegram-plane font1 color1"></i></a>
     <a href="#" class="text-black pe-4"> <i class="fa fa-instagram font1 color1 "></i></a>
     <a href="#" class="text-black pe-4"><i class="fa fa-phone font1 color1">031-.......</i></a>
     <a href="#" class="text-black pe-4"><i class="fa fa-phone font1 color1">031-.......</i></a>
  </div>
  </div>
</template>

<script>
export default {layout:"panels",
data() {
    return {
      user_info: {
        name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message:"",
      },
    };
  },
  methods: {
    submit() {
      this.$axios
        .post("", this.user_data)
        .then((response) => {
          console.log(response.user_data);
          this.user_data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      alert("ثبت شد");
    },
  },
};
</script>

<style>

</style>