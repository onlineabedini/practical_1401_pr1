<template>
    <div>
        <div class="main_div">
            <div class="row m-0">
                <div class="col-12 col-md-5 p-0">
                    <div class="row m-0">
                        <div class="col-12 col-md-6 p-0">
                            <!--  -->
                            <single_img_card
                                img_url="https://tractive.com.my/wp-content/uploads/2022/09/austin-distel-tLZhFRLj6nY-unsplash-scaled.jpg"
                                height="250px">
                            </single_img_card>
                            <single_img_card
                                img_url="https://tractive.com.my/wp-content/uploads/2022/09/william-hook-9e9PD9blAto-unsplash-scaled.jpg"
                                height="250px">
                            </single_img_card>
                        </div>
                        <div class="col-12 col-md-6 p-0">
                            <!--  -->
                            <single_img_card
                                img_url="https://tractive.com.my/wp-content/uploads/2022/09/will-francis-r02wxT3-PYw-unsplash-scaled.jpg"
                                height="250px">
                            </single_img_card>
                            <single_img_card
                                img_url="https://tractive.com.my/wp-content/uploads/2022/09/teemu-paananen-bzdhc5b3Bxs-unsplash-scaled.jpg"
                                height="250px">
                            </single_img_card>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-5 p-0">
                    <!--  -->
                    <single_img_card
                        img_url="https://tractive.com.my/wp-content/uploads/2022/09/william-hook-9e9PD9blAto-unsplash-scaled.jpg"
                        height="500px">
                    </single_img_card>
                </div>
                <div class="col-12 col-md-2 p-0">
                    <!--  -->
                    <single_img_card
                        img_url="https://tractive.com.my/wp-content/uploads/2022/09/rose-lamond-Mmlm8N9_XBo-unsplash-scaled.jpg"
                        height="250px">
                    </single_img_card>
                    <single_img_card
                        img_url="https://tractive.com.my/wp-content/uploads/2022/09/austin-distel-tLZhFRLj6nY-unsplash-scaled.jpg"
                        height="250px">
                    </single_img_card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import single_img_card from './single_img_card'

export default {
    components: {
        single_img_card
    },
}
</script>

<style scoped>
.main_div {
    background-color: rgb(255, 255, 255);
}
</style>