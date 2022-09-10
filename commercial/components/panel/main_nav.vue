<template>
    <div>
        <div class="main_div">
            <div>
                <b>پنل کاربری فروشگاهی</b>
            </div>
            <div>
                <i class="fas fa-user-large"></i>
                <b> {{ full_name }}</b>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        full_name() {
            return this.$store.state.user_data.full_name
        }
    }
}
</script>
<style scoped>
.main_div {
    /* display: flex; */
    text-align: left;
    padding-inline: 20px;
    padding-block: 10px;
    box-shadow: 0px 0px 5px rgb(5, 13, 255);
    background-color: white;
}
</style>