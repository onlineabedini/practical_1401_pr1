<template>
  <div>
    <!-- footer -->
    <div class="footer-container d-inline-block ">
      <div class="row justify-content-between p-5 text-light border-bottom mx-5 h-50">
        <!-- right -->
        <div class="col-8 d-flex text-end">
          <div class="col">
            <img src="/img/me.jpg" alt="" class="img-fluid w-100 rounded-3">
          </div>
          <div class="col-8 mx-5">
            <div class="border-bottom">
              <h3 class="fs-1">علیرضا عابدینی</h3>
              <p class=" fs-5 fw-bolder">
                دانشجوی مهندسی نرم افزار و دیجیتال مارکتینگ
              </p>
            </div>
            <div class="mt-3">
              <h4>درباره من</h4>
              <p>
                از سال 94 بخاطر علاقه زیاد به زمینه برنامه نویسی،زبان نشانه
                گذاری html را یاد گرفتم و وارد عرضه وب شدم ، سپس با یادگیری زبان
                های فرانت اند در این راستا شروع به کار کردم با کسب تجربه در این
                راستا و با یادگیری فعالیت تخصصی در این راستا اغاز شد و دوره
                جدیدی در زندگیم شروع شد که نهایتا مرا به جایگاه کنونی رساند
              </p>
            </div>
          </div>
        </div>
        <!-- right -->

        <!-- left -->
        <div class="p-5 text-end col-4 box-shodow h-50">
          <h4>عضویت در خبرنامه/اخبار</h4>
          <p class="mt-3">
            در خیر نامه عضو شویدو از اخرین اخبار ، تخفیف ها و خدمات من با خبر
            شوید
          </p>
          <input
            type="email"
            v-model="user_email"
            placeholder="پست الکترونیکی"
            class=" d-block w-100 my-3  mt-3 border-0 shadow-none form-control"
          />
          <button type="submit" class="btn w-25 text-white border border-light" v-on:click="show_email()">ثبت</button>
        </div>
        <!-- left -->
      </div>
      <div class="text-light mt-2 pb-5 mx-5">
        <p>
          طراحی شده توسط تیم مطالعاتی ای ار نود تمامی حقوق این وبسایت محفوظ و
          کپی برداری ممنوع است.
        </p>
      </div>
    </div>
    <!-- footer -->
  </div>
</template>
<script>
export default{
  data(){
    return{
      user_email : ''
    }
  },
  methods:{
    show_email(){
      alert(this.user_email)
    }
  }
}
</script>
<!-- onlineabedini ( علیرضا عابدینی ) -->
<!-- اینجا نیاز به scoped نیست -->
<style scoped>
.footer-container {
  background-color: #333;
}
.box-shodow {
  border-radius: 5px;
  box-shadow: 0px 1px 4px rgb(19, 18, 18);
}

::placeholder {
  letter-spacing: 3px;
  padding: 5px;
}
</style>
