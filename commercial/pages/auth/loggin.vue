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
                  <input type="text" class="form-control" placeholder="username" v-model="user_info.username" />
                </div>
                <div class="form-group mb-2">
                  <input type="password" class="form-control" id="password" placeholder="رمز عبور"
                    v-model="user_info.password" />
                </div>
                <div class="form-group mb-2">
                  <input type="checkbox" class="custom-control-input" v-model="user_info.checked" />
                  <label> مرا به خاطر بسپار </label>
                </div>
                <div class="form-group mb-2 d-grid p-2">
                  <button type="submit" class="btn btn-primary btn-block" @click="login()">
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
        
      },
    };
  },
 methods: {
  loggin() {
      this.$axios
        .post("http://localhost:8080/api/user/login", this.user_info)
        .then((response) => {
          console.log(response.user_info);
          
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
  }

</script>
<style></style>