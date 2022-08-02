<template>
  <div>
    <!-- icon -->
    <div class="icon">
      <img src="#" alt="" />
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body p-5">
              <!--  -->
              <h3>ورود</h3>
              <h6 class="mb-5 text-secondary">
                در المنتور فارسی حساب ندارید؟
                <a href="#" class="text-danger">ثبت نام کنید</a>
              </h6>
              <!--  -->
              <form>
                <div class="form-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="username"
                    v-model="user_info.username"
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="رمز عبور"
                    v-model="user_info.password"
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    v-model="user_info.checked"
                  />
                  <label> مرا به خاطر بسپار </label>
                </div>
                <div class="form-group mb-2 d-grid p-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    @click="login()"
                  >
                    ورود
                  </button>
                </div>
              </form>
            </div>
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
      user_info: {
        username: "",
        password: "",
        checked: false,
      },
    };
  },
  methods: {
    login() {
      console.log("username:", this.user_info.username);
      console.log("pass:", this.user_info.password);
      console.log("checked:", this.user_info.checked);
      alert("ورود شما موفقیت آمیز بود");
    },
  },
};
</script>

<style>
</style>