<template>
    <div>
        <div class="main_div p-5">
            <div class="title_div text-end py-2">
                <h3>اضافه کردن محصول</h3>
            </div>
            <!-- main section -->
            <div class="info_div rtl">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">عنوان محصول</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="product_data.title">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">زیر عنوان</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="product_data.subtitle">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">قیمت محصول</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="product_data.price">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">تصویر محصول</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="product_data.img_url">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">تصویر ثانوی محصول</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="product_data.sec_img_url">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">دسته محصول</label>
                        <select class="form-select" aria-label="Default select example" v-model="product_data.category">
                            <option :value="category.value" v-for="category in category_list" :key="category.name">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">وضعیت تخفیف</label>
                        <select class="form-select" aria-label="Default select example" v-model="product_data.discount">
                            <option :value="false">بدون تخفیف</option>
                            <option :value="true">دارای تخفیف</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">توضیحات محصول</label>
                        <textarea rows="15" class="form-control" v-model="product_data.description"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" @click="add_product()">افزودن محصول</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: "panel",
    data() {
        return {
            product_data: {},
            category_list: [
                { name:'همه محصولات', value: 'all' },
                { name:'محصولات جدید', value: 'new' },
                { name:'پرطرفدار', value: 'popular' },
                { name:'فیلم و سریال', value: 'film' },
                { name:'اکانت شبکه های اجتماعی', value: 'account' },
                { name:'موسیقی', value: 'music' },
                { name:'آموزشی', value: 'education' },
                { name:'محصولات کاربردی ویژه', value: 'special' },
            ]
        }
    },
    methods: {
        add_product() {
            this.$axios.post('/product/make/', this.product_data).then(
                (res) => {
                    alert('محصول با موفقیت اضافه شد')
                    this.product_data = {}
                    this.$router.push('/panel/product')
                },
                (err) => {
                    alert('اطلاعات وارد شده غلط است')
                    this.product_data = {}
                }
            ).catch(err => {
                alert('ارتباط با سرور برقرار نشد')
            })
        }
    }
}
</script>