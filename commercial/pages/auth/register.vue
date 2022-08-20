<template>
  <div>
    <div class="container">
      <h2 class="mx-4 pt-5 text-center-right container-lg">ثبت نام</h2>
      <div class="d-flex pt-3 text-md-end fs-5">
        <p class="mx-4">حساب دارید؟</p>
         <p class="mx-2 text-decoration-underline text-danger">وارد شوید</p>
      </div>
      <div class="mb-3 w-50 p-3 ">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input type="text" class="form-control" v-model="user_data.first_name" id="exampleFormControlInput1" placeholder="نام" />
        <div class="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input type="text" class="form-control" v-model="user_data.last_name" id="exampleFormControlInput1"
            placeholder=" نام خانوادگی" />
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input type="email" class="form-control" v-model="user_data.email" id="exampleFormControlInput1"
              placeholder="ایمیل" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input type="password" class="form-control" v-model="user_data.password" id="exampleFormControlInput1"
              placeholder="پسورد" />
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="address" class="form-control" v-model="user_data.address" id="exampleFormControlInput1"
                placeholder="ادرس" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="number" class="form-control" v-model="user_data.phone_number" id="exampleFormControlInput1"
                placeholder="شماره موبایل" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 col-6 mx-4 w-50 p-3 ">
      <button class="btn btn-primary" type="button" @click="submit()">ثبت نام</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user_data: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        phone_number: "",
      },
    };
  },
  methods: {
    submit() {
      this.$axios
        .post("", this.user_data)
        .then((response)=>{
          console.log(response.user_data)
          this.user_data=response.data;
    })
        .catch((error)=>{
          console.log(error);
        }) 
      alert('ثبت نام انجام شد')
      // axios => send to backend 
      // response <= backend      
    }
  }
};
</script>
<style>

</style>