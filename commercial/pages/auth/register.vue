<template>
  <div>
    <div class="container">
      <h2 class="mx-4 pt-5 text-center-right container-lg">ثبت نام</h2>
      <div class="d-flex">
        <p class="mx-4 pt-3 text-md-end fs-5">حساب دارید؟</p>
        <p
          class="
            mx-2
            pt-3
            text-md-end
            fs-5
            text-decoration-underline text-danger
          "
        >
          وارد شوید
        </p>
      </div>
      <div class="mb-3 w-50 p-3 ">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          v-modal="first_name"
          id="exampleFormControlInput1"
          placeholder="نام"
        />
        <div class="mb-3 ">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          v-modal="last_name"
          id="exampleFormControlInput1"
          placeholder=" نام خانوادگی"
        />
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            v-modal="email"
            id="exampleFormControlInput1"
            placeholder="ایمیل"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="password"
            class="form-control"
            v-modal="password"
            id="exampleFormControlInput1"
            placeholder="پسورد"
          />
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="address"
            class="form-control"
            v-modal="address"
            id="exampleFormControlInput1"
            placeholder="ادرس"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            v-modal="phone_number"
            id="exampleFormControlInput1"
            placeholder="شماره موبایل"
          />
        </div>
        </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 col-6 mx-4 w-50 p-3 ">
      <button class="btn btn-primary" type="button" @click="send_data()">ثبت نام</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name:"",
        email: "",
        password: "",
        address:"",
        phone_number: "",
      },
    };
  },
  methods:{
    send_data(){
      console.log(this.user)
      alert('ثبت نام انجام شد')
      // axios => send to backend 
      // response <= backend
    }
  }
};
</script>

<style>
</style>