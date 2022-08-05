<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 p-5">
        <div class="border shadow-sm p-3 d-grid">
          <h4 class="text-center">ویرایش اطلاعات کاربری</h4>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="نام"
            v-model="user.name"
          />
          <br />
          <input
            type="text"
            placeholder=" نام خانوادگی"
            class="form-control"
            v-model="user.family_name"
          />
          <br />
          <input
            type="text"
            placeholder="ایمیل"
            class="form-control"
            v-model="user.email"
          />
          <br />
          <input
            type="password"
            placeholder="کلمه عبور"
            class="form-control"
            v-model="user.pass"
          />
          <br />
          <input
            type="password"
            placeholder="تکرار کلمه عبور"
            class="form-control"
            v-model="user.repeate_pass"
          />
          <br />

          <div
            class="btn btn-danger text-light d-block"
            type="submit"
            @click="login()"
          >
            ذخیره تغییرات
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      console.log("username:", this.user.name);
      console.log("family_name:", this.user.family_name);
      console.log("email:", this.user.email);
      console.log("pass:", this.user.pass);
      console.log("repeate_pass:", this.user.repeate_pass);
      alert(" تغیر اطلاعات موفقیت آمیز بود");
    },
  },
};
</script>

<style>
</style>