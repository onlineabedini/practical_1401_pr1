<template>
    <div class="main_div">
        <div class="alert_div">
            <div class="title-div">
                <h2>هشدار های وبسایت</h2>
                <div class="divider"></div>
            </div>
            <app_alert class="mb-1" :data="alert.data" :color="alert.color" v-for="alert in alerts" :key="alert.data">
            </app_alert>
        </div>
    </div>
</template>
<script>
import app_alert from '@/components/alert/alert.vue'

export default {
    components: {
        app_alert,
    },
    data() {
        return {
            alerts: [
                {
                    data: 'این یک هشدار آزمایشی است',
                    color: 'blue'
                },
                {
                    data: 'این یک هشدار آزمایشی است',
                    color: 'blue'
                },
            ]
        }
    },
}
</script>
<style scoped>
.title-div {
    display: flex;
    position: relative;
}

.title-div h2 {
    background-color: white;
    z-index: 1;
}
</style>