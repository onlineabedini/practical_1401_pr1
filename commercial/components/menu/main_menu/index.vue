<template>
    <div>
        <div class="main_div">
            <div class="p-0 m-0">
                <ul class="header-nav nav">
                    <li class="nav-item">
                        <nuxt-link class="header-nav-link nav-link" to="/">خانه</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <mega_dropdown title="خدمات ما" link="#">
                            <div class="row m-0">
                                <!-- img -->
                                <div class="col-12 col-lg-4 p-0 ps-lg-5">
                                    <img class="img-fluid w-100 h-100"
                                        src="https://license-market.ir/uploads/image/rootimage/713/0312dbdb07cd66970449af4f28faffb0.png?w=400&h=400&q=90"
                                        alt="">
                                </div>
                                <div class="col-12 col-lg-8 p-2">
                                    <div class="row m-0">
                                        <div class="col-12 col-md-6 p-0 pb-2 border-bottom">
                                            <ul class="mega_list">
                                                <li>کارت اعتباری ارزی</li>
                                                <li>شماره مجازی دائمی آمریکا</li>
                                                <li>پرداخت درون برنامه</li>
                                                <li>لایسنس سرویس های ویژه</li>
                                            </ul>
                                        </div>
                                        <div class="col-12 col-md-6 p-0 pb-2 border-bottom">
                                            <ul class="mega_list">
                                                <li>فیلم و سریال</li>
                                                <li>تلوزیون آنلاین</li>
                                                <li>ورزشی</li>
                                                <li>انیمه</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="row m-0">
                                        <div class="col-12 col-md-6 p-0 pt-2">
                                            <ul class="mega_list">
                                                <li>کارت اعتباری ارزی</li>
                                                <li>شماره مجازی دائمی آمریکا</li>
                                                <li>پرداخت درون برنامه</li>
                                                <li>لایسنس سرویس های ویژه</li>
                                            </ul>
                                        </div>
                                        <div class="col-12 col-md-6 p-0 pt-2">
                                            <ul class="mega_list">
                                                <li>فیلم و سریال</li>
                                                <li>تلوزیون آنلاین</li>
                                                <li>ورزشی</li>
                                                <li>انیمه</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mega_dropdown>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="header-nav-link nav-link" to="/blog">وبلاگ</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <mega_dropdown title="درباره ما" link="/about">
                            <div class="row m-0">
                                <!-- img -->
                                <div class="col-12 col-lg-4 p-0 ps-lg-5">
                                    <img class="img-fluid w-100 h-100"
                                        src="https://license-market.ir/uploads/image/rootimage/1028/bd4c9da707b8999dc7e12fbe1e02d745.jpg?w=400&h=400&q=90"
                                        alt="">
                                </div>
                                <div class="col-12 col-lg-8 px-2 py-3">
                                    <h4>درباره تیم ما:</h4>
                                    <hr>
                                    <small>
                                        هدف ما، تبدیل دنیای دیجیتال امروز به یک تجربه لذتبخش تر و ارائه خدمات با
                                        پشتیبانی
                                        حرفه ای برای شما است. تا بتوانیم با اطلاع از مشکلات های موجود برای آن ها، قدمی
                                        مثبت
                                        و صحیح در جهت حل آن ها برداریم.
                                    </small>
                                </div>
                            </div>
                        </mega_dropdown>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import mega_dropdown from '@/components/global/mega_dropdown.vue'

export default {
    name: 'Header',
    components: {
        mega_dropdown
    }
}
</script>
<style scoped>
.main_div {
    position: relative;
}

.header-nav {
    display: inline-flex;
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
    padding: 0px;
    align-self: center;
}

.header-nav-link {
    color: white;
    cursor: pointer;
}

.nav-item {
    align-self: center;
    margin-inline: 5px;
}

.mega_list {
    /*  */
    font-size: 14px;
}

@media only screen and (max-width: 500px) {

    .header-nav {
        display: inline-block;
        font-size: 15px;
        font-weight: bold;
        margin: 0px;
        padding: 0px;
        align-self: center;
    }

    .nav-item {
        display: inline-block;
    }

}
</style>
