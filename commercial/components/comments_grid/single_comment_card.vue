<template>
    <div>
        <div class="main_div">
            <div class="user_info mb-3">
                <div class="info-section">
                    <div class="user_img">
                        <img class="h-100 rounded-circle" :src="comment.user.img_url" alt="">
                    </div>
                    <div class="user_name">
                        {{ comment.user.name }}
                    </div>
                </div>
            </div>
            <div class="comment_body text-end">
                {{ comment.text }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['comment'],
    data() {
        return {
            //
        };
    },
    methods: {
        //
    },
    mounted() {
        //
    },
};
</script>
<style scoped>
.main_div {
    padding: 30px;
    border: 1px solid rgba(0, 0, 0, 0.126);
    border-radius: 5px;
    height: 300px;
}

.comment_body {
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
}

/* user information section */
.user_info {
    /*  */
    padding: 5px;
    padding-top: 25px;
    display: flex;
    color: red;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;
}

.info-section {
    display: flex;
    align-items: center;
}

.user_img {
    height: 60px;
}

.user_name {
    /*  */
    padding-inline: 20px;
}

.left-section {
    /*  */
}
</style>