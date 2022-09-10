<template>
    <div>
        <div class="main_div">
            <div class="title_div mb-5 text-end">
                <h3> لیست محصولات خریداری شده </h3>
            </div>
            <div class="list_section">
                <div class="list_div">
                    <div class="list_item my-1" v-for="purchased in purchased_list" :key="purchased.title">
                        <div class="right_info">
                            {{ purchased.title }}
                        </div>
                        <div class="left_info">
                            {{ purchased.price }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            purchased_list: [
                {
                    title: "Purchased1",
                    price: "300 تومان"
                },
                {
                    title: "Purchased1",
                    price: "300 تومان"
                },
                {
                    title: "Purchased1",
                    price: "300 تومان"
                },
            ]
        }
    },
}
</script>
<style scoped>
.main_div {
    /*  */
}

.title_div {
    /*  */
}

.list_section {
    /*  */
}

.list_div {
    /*  */
}

.list_item {
    border: 1px solid rgba(0, 0, 0, 0.388);
    border-radius: 5px;
    padding-block: 10px;
    padding-inline: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
</style>