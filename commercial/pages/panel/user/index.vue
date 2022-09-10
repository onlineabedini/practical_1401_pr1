<template>
    <div>
        <div class="button_div text-end py-3">
            <nuxt-link class="btn btn-primary" to="/panel/user/add">اضافه کردن کاربر</nuxt-link>
        </div>
        <user_list></user_list>
    </div>
</template>
<script>
import user_list from '@/components/user/user_list.vue';

export default {
    layout: "panel",
    components: {
        user_list
    }
}
</script>