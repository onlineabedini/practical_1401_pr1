<template>
  <div>
    <h3 class="pt-5 mx-4">ارسال تیکت</h3>
    <div class="shadow-lg p-3 mb-5 bg-body rounded mx-4 pt-2">
      <p class="pt-5 mx-4">
        برای ارسال درخواست پشتیبانی و یا سوالات قبل از خرید، می توانید از فرم
        ارسال تیکت استفاده کنید
      </p>
      <div class="d-flex justify-content-end mx-4">
        <a
          href="https://elementorfa.ir/dashboard/tickets/"
          class="text-decoration-none text-white btn btn-success mx-2 pt-2"
        >
          مشاهده همه تیکت ها
        </a>
      </div>
      <p class="d-flex justify-content-start mx-4 pt-3">
        لطفا به نکات زیر توجه فرمایید :
      </p>
      <div
        class="shadow-sm p-3 mb-5 bg-body rounded mx-4 border-end border-danger"
      >
        <p class="d-flex justify-content-start mx-4 pt-2">
          پس از ارسال تیکت حداکثر بین 1 تا ۱۲ ساعت آینده پاسخ برای شما ارسال
          خواهد شد.
        </p>
        <p class="d-flex justify-content-start mx-4 pt-2">
          برخی از تیکت ها ممکن است، نیاز به زمان بیشتری برای بررسی داشته باشند.
        </p>
        <p class="d-flex justify-content-start mx-4 pt-2">
          پس از ارسال تیکت، نیازی به تماس تلفنی نیست. تیکت ارسالی شما قطعا توسط
          همکاران ما بررسی و پاسخ داده خواهد شد.
        </p>
      </div>
    </div>
    <div class="shadow-lg p-3 mb-5 bg-body rounded mx-4 pt-2">
      <div class="row bg-white m-0">
        <div class="col-4">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >آدرس ایمیل</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="لطفا ایمیل خود را وارد کنید"
            />
          </div>
        </div>

        <div class="col-5">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">نام</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="لطفا نام خود را وارد کنید"
            />
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row bg-white">
        <div class="mb-3 w-50 p-3">
          <label for="exampleFormControlInput1" class="form-label"
            >عنوان تیکت</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="یک عنوان کوتاه برا تیکت قرار دهید"
          />
        </div>
      </div>
      <div class="row bg-white">
        <div class="col-4 mx-4">
          <select class="form-select" aria-label="">
            <option selected>بخش تیکت</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-5"></div>
        <div class="col-3"></div>
      </div>
      <div class="row m-0 bg-white">
        <div class="mb-3 pt-5 w-75 p-3">
          <div class="bg-white border mx-4">
            <div class="bg-light d-flex">
              <i class="fa fa-bold fa-s my-2 mx-4"></i>
              <i class="fa fa-underline fa-s my-2 mx-4"></i>
              <i class="fa fa-link fa-s my-2 mx-4"></i>
            </div>
            <label for="exampleFormControlTextarea1" class="form-label"
              >توضیحات</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            >
توضیحات خود را به صورت کامل وارد نمایید</textarea
            >
          </div>
          <div class="pt-3 d-flex justify-content-end">
            <button type="button" class="btn btn-light">کپی فایل</button>
          </div>
          <div class="mx-4 pt-5">
            <button type="button" class="btn btn-success">ارسال تیکت</button>
            <button type="button" class="btn btn-secondary">بازنشانی</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "panels",
};
</script>

<style>
</style>