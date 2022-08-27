<template>
  <div>
  <h1>{{this.id}}</h1>
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
export default {
  data() {
    return {
      id:1,
      user_data: {
        first_name:"",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  mounted(){
    this.id = this.$route.params.id
  },
  methods:{
    update() {
      this.$axios.put("" +this.id).then(
        response => {
          console.log(response)
        }
      )
      .catch(
        error => {
          consel.log(error)
        }
      )
    },
  }
};
</script>
<style>
</style>