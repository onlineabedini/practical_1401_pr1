<template>
  <div class="footer-div">
    <div class="container">
      <div class="row">
        <div class="col-2 mt-4 ms-4">
          <div>
            <img
              class="img-fluid rounded"
              src="@/static/img/me.jpg"
              alt="Alireza Abedini"
            />
          </div>
        </div>
        <div class="col mt-4 ms-4">
          <div class="text-white">
            <h1 style="font-size: x-large">
              <strong> علیرضا عابدینی </strong>
            </h1>
            دانشجوی مهندسی نرم‌افزار و دیجیتال مارکتینگ
            <br />
            <br />
            درباره من
            <br />
            <p class="text-white-50" style="font-size: small">
              از سال ۹۴ به خاطر علاقه زیاد به زمینه برنامه نویسی، زبان نشانه
              گذاری html را یاد گرفتم و وارد عرضه وب
              <br />شدم.سپس با یادگیری زبان‌های فرانت اند، در این راستا شروع به
              کار کردم با کسب تحربه در این راستا و با <br />
              یادگیری وردپرس فعالیت تخصصی من در این راستا آغاز شد و دوره جدیدی
              در زندگیم شروع شد که نهایتا من را <br />
              به جایگاه کنونی رساند
            </p>
          </div>
        </div>
        <div class="col-4 mt-4 ms-4">
          <div class="border border-dark rounded-1 shadow">
            <div class="p-4 pb-0">
              <div class="text-white">
                <div class="row">
                  <div class="flex-xxl-fill">
                    <p class="pt-1">
                      <strong>عضویت در خبرنامه/اخبار</strong>
                    </p>
                    <p class="text-white-50" style="font-size: medium">
                      در خبرنامه عضو شوید واز آخرین اخبار ، تخفیف‌ها و خدمات من
                      مطلع شوید!
                    </p>
                  </div>

                  <div class="flex-xxl-fill">
                    <div class="form-outline form-white mb-4">
                      <input
                        class="form-control"
                        placeholder="پست الکترونیکی"
                      />
                    </div>
                  </div>
                  <div class="flex-xxl-fill">
                    <button class="btn btn-outline-light mb-4">ثبت</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-2">
            <!-- Facebook icon -->
            <a
              class="btn btn-outline-light rounded-pill btn-floating m-1"
              href="#!"
              ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter icon -->
            <a
              class="btn btn-outline-light rounded-pill btn-floating m-1"
              href="#!"
              ><i class="fab fa-twitter-square"></i
            ></a>

            <!-- Instagram icon -->
            <a
              class="btn btn-outline-light rounded-pill btn-floating m-1"
              href="#!"
              ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin icon -->
            <a
              class="btn btn-outline-light rounded-pill btn-floating m-1"
              href="#!"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <div class="p-3">
              <!-- copy right section -->
              <div class="">
                <div class="text-white">
                  <p class="text-center">
                    <strong>
                      تمامی حقوق این سایت متعلق به علیرضا عابدینی می‌باشد.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  
<script>
export default {
  name: "app_footer",
};
</script>

<style scoped>
.footer-div {
  background-color: rgb(45, 45, 45);
  font-family: "IRANSans yekan";
}
</style>
