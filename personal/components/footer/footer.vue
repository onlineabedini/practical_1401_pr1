<template>
  <div>
    <div class="background p-5">
      <div class="container-fluid">
        <!-- main content -->
        <div class="row m-0">
          <!-- col2 -->
          <div class="col-2 p-0 m-0">
            <div class="p-0">
              <img class="img-fluid rounded w-100 h-100" src="/img/me.jpg" alt="onlineabedini" />
            </div>
          </div>
          <!-- col2 -->
          <!-- col6 -->
          <div class="col-6 px-0">
            <div class="rounded px-5">
              <h1>{{ full_name }}</h1>
              <h5>{{ bio }}</h5>
              <hr />
              <h5>درباره من</h5>
              <small>
                {{ about }}
              </small>
            </div>
          </div>
          <!--/ col6 -->
          <!-- col4 -->
          <div class="col-4 p-0 m-0">
            <div class="form_div w-100 rounded-3 p-5">
              <form>
                <div class="login_title">عضویت در خبرنامه / اخبار</div>
                <div class="form-text pb-3">
                  در خبرنامه عضو شوید و از آخرین اخبار، تخفیف ها و خدمات من با خبر باشید 
                </div>
                <div class="form-group mb-2">
                  <input class="form-control" type="email" placeholder="پست الکترونیکی" v-model="register_email" />
                </div>
                <div class="btn btn-outline-light px-4 py-2" @click="register_Newsletters()">ثبت</div>
                <div>
                  <small>
                    {{ register_alert }}
                  </small>
                </div>
              </form>
            </div>
          </div>
          <!--/ col4 -->
        </div>
        <!--/ main content -->
        <!-- copy right -->
        <div class="copy-right mt-5 py-3">
          <h6>
            طراحی شده توسط تیم مطالعاتی آی آر نود / تمامی حقوق این وبسایت محفوظ و کپی برداری ممنوع است.
          </h6>
        </div>
        <!--/ copy right -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full_name: "علیرضا عابدینی",
      bio: "دانشجوی مهندسی نرم افزار و دیجیتال مارکتینگ",
      about: `
          از سال 94 بخاطر علاقه زیاد به زمینه برنامه نویسی زبان نشانه گذاری html را یاد گرفتم
          و وارد عرصه وب شدم، سپس با یاد گیری زبان های فرانت اند در این راستا شروع به کار کردم
          با کسب تجربه در این راستا و با یادگیری وردپرس فعالیت تخصصی من در اسن راستا آغاز شد و دوره جدیدی 
          در زندگیم شروع شد که نهایتا مرا به جایگاه کنونی رساند.
        `,

        // form variable
        register_alert: "",
        register_email: "",
    }
  },
  methods: {
    register_Newsletters() {
      if (this.register_email){
        this.register_alert = "شما با موفقیت عضو شدید";
      } else {
        this.register_alert = "لطفا ایمیل خود را وارد کنید";
      }
    }
  }
}
</script>
<style scoped>
.background {
  background-color: rgb(39, 39, 39);
  color: white;
}

hr {
  background-color: rgba(255, 255, 255, 0.336);
}

/* login form */
.login_title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
}

.form-text {
  color: white;
}

input {
  color: black;
  font-weight: bold;
  letter-spacing: 2px;
}

/* copy right */
.copy-right{
  border-top: 1px solid rgba(255, 255, 255, 0.053);
}
.form_div{
  box-shadow: 0px 0px 5px black;
}
</style>
