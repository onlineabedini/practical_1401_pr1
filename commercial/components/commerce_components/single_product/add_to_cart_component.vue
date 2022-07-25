<template>
  <div>
    <div class="row">
      <div class="col-1"></div>
      <!--img-->
      <div class="col-4">
        <img :src="cardinformation.img" class="rounded" />
      </div>
      <div class="col-6">
        <!--خدمات / صفحه ی اصلی کارت اعتباری ارزی-->
        <div class="text-end p-3">
          <div class="row">
            <div class="col-1 p-2">
              <h1 class="btn btn-info rounded-pill text-end">خدمات</h1>
            </div>
            <div class="col-10 p-3">
              <h5>صفحه اصلی / {{ cardinformation.smallname }}</h5>
            </div>
          </div>
        </div>
        <!--title-->
        <h2 class="p-4">{{ cardinformation.title }}</h2>
        <div class="text-danger p-3">
          <h2>{{ cardinformation.price }}</h2>
        </div>
        <div class="row p-3">
          <!--col1-->
          <div class="col-4">
            <div class="row"><h4>انتخاب ریجن/کشور صادر کننده</h4></div>
            <div class="row">
              <select class="form-select">
                <option value="0">اروپا ( 4 ساله )</option>
              </select>
            </div>
          </div>
          <!--col2-->
          <div class="col-1"></div>
          <div class="col-3">
            <div class="row"><h4>انتخاب واحد ارزی</h4></div>
            <div class="row">
              <select class="form-select">
                <option value="0">دلار</option>
                <option value="0">یورو</option>
              </select>
            </div>
          </div>
          <!--col3-->
          <div class="col-1"></div>
          <div class="col-3">
            <div class="row"><h4>انتخاب موجودی کارت</h4></div>
            <div class="row">
              <select class="form-select">
                <option value="0">5</option>
                <option value="0">10</option>
                <option value="0">15</option>
                <option value="0">20</option>
                <option value="0">25</option>
                <option value="0">30</option>
                <option value="0">50</option>
                <option value="0">75</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row p-4">
          <div class="col-4 text-end btn btn-danger">
            <h3>اضافه به سبد خرید</h3>
          </div>
          <div class="col-4"></div>

          <div class="col-4">
            <!--whatsapp icon in fontawesome-->
            <i class="fab fa-whatsapp fs-4"></i>
            <!--telegram icon in fontawesome-->
            <i class="fab fa-telegram fs-4"></i>
            <!--twitter icon in fontawesome-->
            <i class="fab fa-twitter fs-4"></i>
            <!--facebook icon in fontawesome-->
            <i class="fab fa-facebook-f fs-4"></i>
          </div>
        </div>
      </div>
      <div class="col-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardinformation: {
        smallname: "کارت مجازی ویزا ",
        title: "کارت مجازی ویزا (VISA)",
        price: "۴۰۹٫۰۰۰تومان",
        img: "https://license-market.ir/uploads/image/rootimage/551/00cc119d8cdda451535b2bb7de8def9c.png?w=800&h=800",
      },
    };
  },
};
</script>

<style scope>
</style>