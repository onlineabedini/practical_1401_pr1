<template>
    <div>
        <div class="main_div" @click="btn_click()">
            <div class="main_button btn btn-success ">
                {{ title }}
                <i class="fas fa-angle-down" v-if="!open"></i>
                <i class="fas fa-angle-up" v-if="open"></i>
            </div>
            <div class="dropdown_body priority-1" v-if="open">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data() {
        return {
            open: false
        }
    },
    methods: {
        btn_click() {
            this.open = !this.open
        }
    }
}
</script>
<style scoped>
.main_div {
    cursor: pointer;
    /* position: relative; */
}

.dropdown_body {
    position: absolute;
    background-color: white;
    color: black;
    top: 45px;
    left: 0px;
    right: 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.19);
    border-radius: 5px;
}
.drop_link { 
    color: black;
    padding: 15px;
    display: block;
    text-decoration: none;
}
</style>