<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 p-5">
        <div class="border shadow-sm p-3 d-grid">
          <h4 class="text-center">ویرایش اطلاعات کاربری</h4>
          <br />
          <input 
            type="text" 
            class="my-3"
            placeholder="نام"
            v-model="user_data_update.name"
          />
          <br />
          <input 
            type="text"
            placeholder=" نام خانوادگی" 
            class="my-3" 
            v-model="user_data_update.last_name" 
           />
          <br />
          <input 
           type="text"
           placeholder="ایمیل" 
           class="my-3" 
           v-model="user_data_update.email" 
          />
          <br />
          <input 
           type="text"
           placeholder="شماره تلفن همراه"
           class="my-3" 
           v-model="user_data_update.email" 
          />
          <br />
          <input 
            type="password"
            placeholder="کلمه عبور" 
            class="my-3" 
            v-model="user_data_update.password"
          />
          <br />
          <input
            type="password"
            placeholder="کلمه عبور جدید"
            class="my-3"
            v-model="user_data_update.confirm_password" 
            />
          <br />
          <div class="btn btn-danger text-light d-block" type="submit" @click="update()">ذخیره تغییرات</div>
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
        name:"",
        last_name: "",
        email: "",
        phone_number:"",
        password: "",
        new_password: "",
      },
      confirm_pass:"",
    };
  },
  mounted(){
    this.id = this.$route.params.id
  },
  methods:{
    get_user() {
      this.$axios
      .get("http://localhost:8080/api/users/all" +this.id)
      .then((response) => {
        this.user_data_update=response.data;
          console.log(this.user_data_update);
        })
      .catch(error => consel.log(error));
    },
    update() {
      this.$axios
      .put("http://localhost:8080/api/user/update" ,this.user_data_update)
      .then((response) => {
        this.user_data_update=response.data;
          console.log(this.user_data_update);
        })
      .catch(error => consel.log(error));
    },
  }
};
</script>
<style>
</style>