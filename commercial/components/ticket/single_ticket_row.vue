<template>
    <div>
        <div class="main_div">
            <div class="right_info">
                <div class="title">{{ title }}</div>
            </div>
            <div class="left_info">
                <div class="ticket_number">
                    {{ ticket_num }}
                </div>
            </div>
            <!-- optional -->
            <!-- <div class="btn btn-danger">ارسال پاسخ برای این تیکت</div> -->
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'ticket_num'],
}
</script>
<style scoped>
.main_div {
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
}

.right_info {
    display: flex;
}

.title {
    /*  */
    padding: 10px;
    text-decoration: none;
}

.ticket_number {
    /*  */
    padding: 10px;
}

@media only screen and (max-width: 500px) {
    .main_div {
        display: inline-block;
        padding: 2px;
    }

    .right_info {
        display: flex;
        border: 1px solid black;
    }
}
</style>