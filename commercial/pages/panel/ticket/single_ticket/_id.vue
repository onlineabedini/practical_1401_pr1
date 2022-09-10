<template>
    <div>
        <div class="main_div p-5">
            <div class="title_div text-end py-2">
                <h3>ارسال تیکت</h3>
            </div>
            <!-- main section -->
            <div class="info_div rtl">
                <!--  -->
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">عنوان تیکت</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="ticket_data.title" disabled>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">محتوای تیکت شما</label>
                        <textarea rows="10" class="form-control" v-model="ticket_data.content" disabled></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">پاسخ به تیکت:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            disabled placeholder="این قسمت میتواند توسط توسعه دهنده توسعه داده شود">
                    </div>

                    <button type="button" class="btn btn-outline-dark" @click="delete_data()">حذف</button>
                    <button type="button" class="btn btn-outline-dark" @click="back()">بازگشت</button>
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
            ticket_data: {}
        }
    },
    mounted() {
        this.get_data()
    },
    methods: {
        get_data() {
            let id = this.$route.fullPath.split('/')[4]
            this.$axios.get('/ticket/get_id/' + id).then(
                res => {
                    this.ticket_data = res.data.data[0];
                },
                err => {
                    alert(err.data.ans)
                }
            )
        },

        delete_data(){
            this.$axios.delete('/ticket/delete/' + this.ticket_data._id).then(
                res => {
                    alert('با موفقیت حذف شد')
                    this.$router.push('/panel/ticket/')
                },
                err => {
                    alert('حذف اطلاعات با خطا مواجه شد')
                }
            )
        },

        back() {
            this.$router.push('/panel/ticket/')
        }
    }
}
</script>