<template>
    <div>
        <div class="main_div">
            <div class="title_div text-end mb-5">
                <h3>لیست تیکت های پشتیبانی</h3>
            </div>
            <div class="list_div" v-if="ticket_list">
                <div class="my-2" v-for="(ticket, index) in ticket_list" :key="index" @click="show_ticket(ticket._id)">
                    <single_ticket_row :title="ticket.title" :ticket_num="index + 1">
                    </single_ticket_row>
                </div>
            </div>
            <div v-else>
                هیچ تیکتی وجود ندارد
            </div>
        </div>
    </div>
</template>
<script>
import single_ticket_row from './single_ticket_row.vue';

export default {
    data() {
        return {
            ticket_list: [],
        }
    },
    components: {
        single_ticket_row
    },
    mounted() {
        this.get_all_tickets()
    },
    methods: {
        get_all_tickets() {
            this.$axios.get('/ticket/get_all').then(
                res => {
                    this.ticket_list = res.data.data
                    console.log(this.ticket_list)
                },
                err => {
                    alert('دریافت اطلاعات با مشکل مواجه شد')
                }
            )
        },

        show_ticket(id) {
            this.$router.push('/panel/ticket/single_ticket/' + id)
        }
    }
}
</script>
<style scoped>
.main_div {
    /*  */
}

.list_div {
    /*  */
}
</style>