<template>
    <div>
        <div class="main_div px-5 py-3" :style="{ 'backgroundColor': color }">
            {{ data }}
        </div>
    </div>
</template>

<script>

export default {
    props: {
        data: {
            default: ' مراکز تماس : 7085-7105-021 و 27-283-284-021'
        },
        color: {
            default: 'blue'
        }
    }
}

</script>

<style scoped>
.main_div {
    background-color: #3ecf8e;
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>