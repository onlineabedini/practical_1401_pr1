<template>
    <div class="img_div">
        <img :src="img_url" class="img-fluid w-100" :style="{ 'height': height }">
    </div>
</template>

<script>
export default {
    props: ['img_url', 'height'],
}
</script>

<style scoped>
.img_div {
    padding: 2px;
}

.img_div img {
    cursor: pointer;
    border-radius: 10px;
}
</style>