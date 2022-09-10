<template>
    <div>
        <div class="main_div">
            <div>
                <dev_alert></dev_alert>
            </div>
            <div class="process_div py-5">
                <cart_process></cart_process>
            </div>
            <div class="cart_list p-5">
                <cart_list></cart_list>
            </div>
        </div>
    </div>
</template>
<script>
import cart_process from '@/components/global/cart_process.vue';
import cart_list from '@/components/commerce_components/cart_list.vue'
import dev_alert from '@/components/global/dev_alert.vue'

export default {
    middleware: 'auth',
    components: {
        cart_process,
        cart_list,
        dev_alert
    }
}
</script>