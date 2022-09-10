<template>
    <div>
        <div class="main_div p-5">
            <div class="title_div text-end py-2">
                <h3>اضافه کردن مقاله</h3>
            </div>
            <!-- main section -->
            <div class="info_div rtl">
                <!--  -->
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">عنوان مقاله</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="article_data.title">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">تصویر مقاله</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="article_data.img_url">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">توضیحات مقاله</label>
                        <textarea rows="3" class="form-control" v-model="article_data.description"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">محتوای مقاله</label>
                        <textarea rows="10" class="form-control" v-model="article_data.content"></textarea>
                    </div>

                    <button type="button" class="btn btn-primary" @click="add_article()">ارسال مقاله</button>
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
            article_data: {}
        }
    },
    methods: {
        add_article() {
            this.$axios.post('/article/make', this.article_data).then(
                (res) => {
                    alert('مقاله با موفقیت ثبت شد')
                    this.article_data = {}
                    this.$router.push('/panel/article/')
                },
                (err) => {
                    alert('اطلاعات وارد شده غلط است')
                    this.article_data = {}
                    this.re_password = ''
                }
            ).catch(err => {
                alert('ارتباط با سرور برقرار نشد')
            })
        }
    }
}
</script>