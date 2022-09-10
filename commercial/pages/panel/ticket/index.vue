<template>
    <div>
        <div class="button-section text-end py-5">
            <nuxt-link class="btn btn-primary" to="/panel/ticket/add">ارسال تیکت جدید</nuxt-link>
        </div>
        <div>
            <ticket_list></ticket_list>
        </div>
    </div>
</template>
<script>
import ticket_list from '@/components/ticket/ticket_list.vue';

export default {
    layout: "panel",
    components: {
        ticket_list
    }
}
</script>