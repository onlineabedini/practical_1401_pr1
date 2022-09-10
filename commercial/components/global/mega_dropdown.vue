<template>
    <div>
        <div class="main_div" @mouseover="btn_hover()" @mouseleave="btn_hover_out()">
            <nuxt-link class="main_button" :to="link">
                {{ title }}
                <i class="fas fa-angle-down" v-if="!open"></i>
                <i class="fas fa-angle-up" v-if="open"></i>
            </nuxt-link>
            <div class="dropdown_body priority-1 p-3" v-if="open" @mouseover="mega_hover()" @mouseleave="mega_hover_out()">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'link'],
    data() {
        return {
            open: false,
            is_mega_hover: false
        }
    },
    methods: {
        btn_hover() {
            this.open = true
        },
        btn_hover_out() {
            setTimeout(() => {
                if (!this.is_mega_hover) {
                    this.open = false
                }
            }, 100);
        },
        mega_hover() {
            this.open = true
            this.is_mega_hover = true
        },
        mega_hover_out() {
            this.open = false
            this.is_mega_hover = false
        }
    }
}
</script>
<style scoped>
.main_div {
    cursor: pointer;
}

.main_button {
    color: white;
    text-decoration: none;
}

.dropdown_body {
    position: absolute;
    background-color: white;
    color: black;
    top: 45px;
    right: 0px;
    left: 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.19);
    border-radius: 5px;
}
</style>