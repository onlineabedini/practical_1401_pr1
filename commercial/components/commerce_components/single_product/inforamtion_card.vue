<template>
    <div>
        <div class="main_div py-1">
            <!-- {{ information }} -->
            <div v-html="information"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        information: {
            default: 'این محصول اطلاعاتی برای نمایش ندارد!'
        }
    }
}
</script>