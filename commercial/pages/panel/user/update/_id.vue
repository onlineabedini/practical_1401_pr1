<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 p-5">
        <div class="border shadow-sm p-3 d-grid">
          <h4 class="text-center">ویرایش اطلاعات کاربری</h4>
          <br />
          <input type="text" class="form-control my-3" placeholder="نام" v-model="user_data.first_name" />
          <br />
          <input type="text" placeholder=" نام خانوادگی" class="form-control my-3" v-model="user_data.last_name" />
          <br />
          <input type="text" placeholder="ایمیل" class="form-control my-3" v-model="user_data.email" />
          <br />
          <input type="password" placeholder="کلمه عبور" class="form-control my-3" v-model="user_data.password" />
          <br />
          <input type="password" placeholder="تایید کلمه عبور" class="form-control my-3" v-model="user_data.confirm_password" />
          <br />
          <div class="btn btn-danger text-light d-block" type="submit" @click="login()">ذخیره تغییرات</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { all } from 'q';

export default {
  data() {
    return {
      user: {
        name: "",
        family_name: "",
        email: "",
        pass: "",
        repeate_pass: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios
        .get("http://localhost:8080/api/users/all", this.user_data)
        .then((response) => {
          console.log(response.user_data);
          this.user_data=response.data;
          })
        .update("http://localhost:8080/api/user/update", this.user_data)
        .then((response) => {
          console.log(response.user_data);
          this.user_data=response.data;
          });
        
      alert(" تغیر اطلاعات موفقیت آمیز بود");
    },
  },
};
</script>
<style>
</style>