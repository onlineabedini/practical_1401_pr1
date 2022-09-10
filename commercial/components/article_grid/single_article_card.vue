<template>
    <div class="main_div p-1 m-0">
        <!-- image div -->
        <div class="img_div" :style="{ 'background': 'url(' + img_url + ')' }" @click.self="show_article()"></div>
        <!--/ image div -->
        <!-- description div -->
        <div class="description_section" @click="show_article()">
            <div class="title_div">
                <h5>{{ title }}</h5>
            </div>
        </div>
        <!--/ description div -->
        <div class="edit_btn btn btn-danger" v-if="show_edit" @click.self="edit_article()">ویرایش</div>
    </div>
</template>
<script>
export default {
    props: {
        img_url: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            show_edit: false,
        }
    },
    created() {
        this.is_panel()
    },
    methods: {
        show_article() {
            this.$emit('show_article')
        },
        edit_article() {
            this.$emit('edit_article')
        },
        is_panel() {
            if (this.$route.fullPath.includes('panel')) {
                this.show_edit = true;
            }
        }
    }
}
</script>
<style scoped>
img {
    border-radius: 15px;
}

.main_div {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.264);
    padding: 10px;
    border-radius: 20px;
    position: relative;
    /*  */
}

.img_div {
    /*  */
    cursor: pointer;
    height: 200px;
    border-radius: 20px;
    background-size: cover !important;
}

.description_section {
    /* margin-right: -70px;*/
    background-color: white;
    /* margin-top: -60px; */
    /* margin-right: -20px; */
    z-index: 99;
    /* width: 90%; */
    text-align: right;
    padding: 20px;
    /* position: absolute; */
    height: 120px;
}

.title_div {
    /* */
}

.show_btn {
    /*  */
}

.description {
    height: 101px;
    /* border: 5px solid black; */
    overflow: hidden;
    text-overflow: ellipsis;
}

.edit_btn {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>