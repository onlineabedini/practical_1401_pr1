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
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="شماره موبایل یا آدرس ایمیل"
                  />
                </div>
                <div class="form-group mb-2">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="رمز عبور"
                  />
                </div>
                <div class="form-group mb-2">
                  <input type="checkbox" class="custom-control-input" />
                  <label> مرا به خاطر بسپار </label>
                </div>
                <div class="form-group mb-2 d-grid p-2">
                  <button type="submit" class="btn btn-primary btn-block">
                    ورود
                  </button>
                </div>

                <div class="form-group mb-2 d-grid p-2">
                  <a
                    href="#"
                    class="text-black-50 mx-auto text-decoration-none"
                  >
                    ورود با رمز عبور یکبار مصرف
                  </a>
                </div>
                <!-- login with google -->
                <div class="form-group mb-2 d-grid p-2">
                  <button class="btn btn-primary btn-block">
                    <a href=""
                      ><img
                        class="d-inline-block align-right"
                        width="20px"
                        alt="Google sign-in"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      />
                    </a>

                    ورود با گوگل
                  </button>
                </div>
                <!-- login with google  -->
                <div class="form-group mb-2 d-grid p-2">
                  <a href="#" class="text-black-50 mx-auto">
                    فراموشی رمز عبور؟
                  </a>
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
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.login);
    },
  },
};
</script>

<style>
</style>