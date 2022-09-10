<template>
    <div>
        <div>
            <dev_alert></dev_alert>
        </div>
        <purchased></purchased>
    </div>
</template>
<script>
import purchased from '@/components/commerce_components/purchased_list.vue'
import dev_alert from '@/components/global/dev_alert.vue'

export default {
    layout: "panel",
    components: {
        dev_alert,
        purchased
    }
}
</script>