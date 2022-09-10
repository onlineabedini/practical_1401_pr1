<template>
    <div class="main_div p-1 m-0">
        <!-- image div -->
        <div class="img_div">
            <img :src="img_url" alt="" class="img-fluid rounded h-100">
        </div>
        <!--/ image div -->
        <!-- description div -->
        <div class="description_section p-3 rounded">
            <div class="title_div">
                <h4>{{ title }}</h4>
            </div>
            <div class="description">
                <p>{{ description }}</p>
            </div>
        </div>
        <!--/ description div -->
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
    }
}
</script>
<style scoped>
.main_div {
    /** */
    box-shadow: 0px 0px 5px #198754;
    border-radius: 10px;
}

.img_div {
    /*  */
    cursor: pointer;
}

.description_section {
    /* margin-right: -70px;*/
    background-color: white;
}

.title_div {
    /* */
}

.show_btn {}

.description {
    height: 101px;
    /* border: 5px solid black; */
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>