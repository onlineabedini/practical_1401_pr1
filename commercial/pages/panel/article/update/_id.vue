<template>
    <div>
        <div class="main_div p-5">
            <div class="title_div text-end py-2">
                <h3>بروزرسانی مقاله</h3>
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

                    <button type="button" class="btn btn-primary" @click="update_data()">بروزرسانی مقاله</button>
                    <button type="button" class="btn btn-outline-dark" @click="delete_data()">حذف</button>
                    <button type="button" class="btn btn-outline-dark" @click="cancel_updating()">لغو</button>
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
    mounted() {
        this.get_data()
    },
    methods: {
        get_data() {
            let id = this.$route.fullPath.split('/')[4]
            console.log(id)
            this.$axios.get('/article/get_id/' + id).then(
                res => {
                    this.article_data = res.data.data[0];
                },
                err => {
                    alert(err.data.ans)
                }
            )
        },

        update_data() {
            this.$axios.put('/article/update/' + this.article_data._id, this.article_data).then(
                res => {
                    alert('بروزرسانی موفقیت آمیز بود')
                    this.$router.push('/panel/article/')
                },
                err => {
                    alert('برزورسانی با خطا مواجه شد')
                }
            )
        },

        delete_data(){
            this.$axios.delete('/article/delete/' + this.article_data._id).then(
                res => {
                    alert('با موفقیت حذف شد')
                    this.$router.push('/panel/article/')
                },
                err => {
                    alert('حذف اطلاعات با خطا مواجه شد')
                }
            )
        },

        cancel_updating() {
            this.$router.push('/panel/article/')
        }
    }
}
</script>