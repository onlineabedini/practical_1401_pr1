<template>
    <div>

        <div>
            <div class="p-5 text-center">
                <h2> مهارت های من</h2>
            </div>
            <div class="border-top border-bottom border-dark mx-auto w-50 text-center">
                <h3>مهارت های من در این بخش قابل نمایش هست</h3>
            </div>

            <div class="text-center p-2">
                <h4>برنامه نویسی </h4>
            </div>
        </div>

        <!-- ---------------------------------------->
        

        <div class="p-2" style="width: 75%" aria-valuenow="75">
            <Myskills :color_red = "false" ></Myskills>
        </div>

        <div class="p-2" style="width: 90%" aria-valuenow="90">
            <Myskills :color_red= "false" ></Myskills>
        </div>

        <div class="p-2" style="width: 100%" aria-valuenow="100">
            <Myskills :color_red= "false" ></Myskills>
        </div>

        <div class="p-2 " style="width: 20%" aria-valuenow="20">
            <Myskills :color_red= "false" ></Myskills>
        </div>

        <!-- ------------------------------------------ -->

        <div class="text-center p-2">
            <h5>مهارت های دیگر</h5>
        </div>

        <div>
            <div class="p-2 " style="width: 100%" aria-valuenow="100">
                <Myskills :color_red= "true" ></Myskills>
            </div>

            <div class="p-2 " style="width: 20%" aria-valuenow="20">
                <Myskills :color_red= "true" ></Myskills>
            </div>

            <div class="p-2 " style="width: 70%" aria-valuenow="70">
                <Myskills :color_red= "true" ></Myskills>
            </div>
        </div>
    </div>

</template>

<script>

import Myskills from "../components/skills/myskills.vue";
export default {
       
    components: {
        Myskills,
    },
}
</script>

<style>
</style>
