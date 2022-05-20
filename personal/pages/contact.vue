<template>
  <div>
    <div>
      <!-- title -->
      <div class="text-center pt-5">
        <h4>ارتباط با من</h4>
      </div>
      <!-- line -->
      <hr />
      <!-- form -->
      <div class="form-container py-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">نام و نام خانوادگی </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">ایمیل</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="ایمیل"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">توضیحات</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="توضیبحات خود را وارد کنید"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  padding-inline: 300px;
}
</style>


