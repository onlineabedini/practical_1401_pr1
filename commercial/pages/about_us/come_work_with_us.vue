<template>
<div>
    <div>

    </div>
    <div>
        <h1 class="text-center t2">
            همکاری با ما
        </h1>
    </div>
    <div class="t2 t1">
        <p>در صورتی که تمایل به همکاری در هر یک از زمینه های فعالیتیِ لایسنس مارکت را دارید، میتوانید نسبت به پر کردن فرم زیر اقدام بفرمایید. ایرانیان خارج از کشور، ما برای شما نیز موقعیت های خوبی فراهم کرده ایم.</p>
    </div>
    <div>
        <div class="row d-flex pt-4 t1">
            <div class=" col ">
                <p class="fw-bold"> *نام و نام خانوادگی</p>
            </div>
            <div class="col">
                <p class="fw-bold"> *ایمیل</p>
            </div>
        </div>
        <div>

        </div>
        <div>   
         <div class="row g-3 t1">
             <div class="col">
                 <input type="text" class="form-control" placeholder=" نام و نام خانوادگی" aria-label="نام و نام خانوادگی">
             </div>
             <div class="col">
                 <input type="text" class="form-control" placeholder="ایمیل" aria-label="ایمیل">
             </div>
          </div>

        </div>
        <div>

        </div>
        <div class="t1 pt-3">
            <p class="fw-bold"> *شماره تماس</p>
        </div>
        <div class="t3">
            <div class="input-group ">
             <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
             <button type="button" class="btn btn-outline-secondary">Action</button>
             <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                 <span class="visually-hidden">Toggle Dropdown</span>
             </button>
             <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
        </div>
        <div>

        </div>
        <div class="t1 pt-3">
            <p class="fw-bold">حوزه تمایل به همکاری</p>
        </div>
        <div class="t1 fs-6">
            <p>مثال: همکاری در فروش،بازاریابی، تولید محتوا، دیجیتال مارکتینگ، توسعه دهندگان (فرانت و بک)، پشتیبانی و ...
            </p>
        </div>
        <div class="t1">
             <input type="text" class="form-control" id="inputAddress">
        </div>
        <div>

        </div>
        <div class=" pt-2">
            <p class=" t1 fw-bold">نحوه تمایل به همکاری</p>
            <p class="t1 fs-6">لطفا به صورت خلاصه بیان کنید به چه نحوه علاقه به همکاری با ما دارید.</p>
        </div>
        <div>
            <div class="form-floating t1">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            </div>
        </div>
        <div>

        </div>
        <div class="pt-2">
            <p class=" t1 fw-bold">رزومه (درصورت لزوم)</p>
            <p class="t1 fs-6">لطفا رزومه خود را برا ما ارسال کنید.حداکثر حجم فایل: ۵۱۲۰kb</p>
        </div >
        <div class="t4">
         <div class="input-group ">
            <input type="file" class="form-control" id="inputGroupFile02">
            <label class="input-group-text" for="inputGroupFile02">Upload</label>
         </div>
        </div> 
        <div>

        </div>
        <div class="t5 pt-5 pb-5">
            <div class="d-grid gap-2 ">
            <button class="btn btn-danger btn-lg" type="button">ثبت درخواست</button>
            </div>
        </div>
        
        
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.t5{margin-inline:200px;}
.t1{margin-inline: 220px;}
.t2{margin-top: 150px;}
.t3{margin-inline:230px;}
.t4{margin-inline:210px;}
</style>