<template>
    <div class="main_div rounded row m-0 p-1">
        <!-- image div -->
        <div class="img_div h-100 col-12 col-md-5 p-0">
            <img :src="img_url" alt="" class="img-fluid h-100 w-100">
        </div>
        <!--/ image div -->
        <!-- description div -->
        <div class="description_section h-100 col-12 col-md-7 p-3">
            <div class="title_div">
                <h4>{{ title }}</h4>
            </div>
            <div class="description_div">
                {{ description }}
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
    height: 200px;
}

.img_div {
    /*  */
    cursor: pointer;
}

.description_section {
    background-color: white;
}

.title_div {
    /* */
}

.description_div {
    height: 101px;
    /* border: 5px solid black; */
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>