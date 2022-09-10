<template>
    <div>
        <div class="main_div">
            <div class="question" @click="show_answer = !show_answer">
                {{ question }}
            </div>
            <div class="answer" v-if="show_answer">
                {{ answer }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['question', 'answer'],
    data() {
        return {
            show_answer: false,
        }
    },
}
</script>
<style scoped>
.main_div {
    border: 1px solid rgba(0, 0, 0, 0.133);
    border-radius: 10px;
    cursor: pointer;
}

.question {
    /*  */
    padding: 25px;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
}

.answer {
    /*  */
    padding: 25px;
    border-top: 1px solid rgba(0, 0, 0, 0.133);
    border-radius: 0px 0px 10px 10px;
    font-size: 20px;
}
</style>