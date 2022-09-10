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
                            v-model="ticket_data.title">
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">محتوای تیکت شما</label>
                        <textarea rows="10" class="form-control" v-model="ticket_data.content"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">پاسخ به تیکت:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            disabled placeholder="این قسمت میتواند توسط توسعه دهنده توسعه داده شود">
                    </div>

                    <button type="button" class="btn btn-primary" @click="add_ticket()">ارسال تیکت</button>
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
    methods: {
        add_ticket() {
            this.$axios.post('/ticket/make', this.ticket_data).then(
                (res) => {
                    alert('تیکت شما با موفقیت ثبت شد')
                    this.ticket_data = {}
                    this.$router.push('/panel/ticket')
                },
                (err) => {
                    alert('اطلاعات وارد شده غلط است')
                    this.ticket_data = {}
                }
            ).catch(err => {
                alert('ارتباط با سرور برقرار نشد')
            })
        }
    }
}
</script>