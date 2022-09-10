<template>
    <div>
        <div class="main_div px-5 py-3" :style="{ 'backgroundColor': color }">
            <div class="text-div">{{ data }}</div>
            <div class="del-btn btn btn-danger" v-if="show_del" @click="del_alert()">حذف</div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            show_del: false,
        }
    },
    props: {
        data: {
            default: ' مراکز تماس : 7085-7105-021 و 27-283-284-021'
        },
        color: {
            default: 'blue'
        }
    },
    created() {
        this.is_panel()
    },
    methods: {
        del_alert(){
            alert('delete alert')
        },

        is_panel(){
            if (this.$route.fullPath.includes('panel')){
                this.show_del = true;
            }
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
    position: relative;
}

.del-btn {
    position: absolute;
    left: 0px;
    top: 8px;
}
</style>