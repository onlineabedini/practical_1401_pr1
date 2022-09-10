<template>
    <div>
        <div class="main_div text-center m-auto">
            <div class="line"></div>
            <div class="process-item first-section">
                <div class="process-icon"><i class="fas fa-cart-plus"></i></div>
                سبد خرید
            </div>
            <div class="process-item second-section">
                <div class="process-icon"><i class="fas fa-barcode"></i></div>
                صورت حساب
            </div>
            <div class="process-item third-section">
                <div class="process-icon"><i class="fas fa-cash-register"></i></div>
                پرداخت
            </div>
        </div>
    </div>
</template>
<style scoped>
.main_div {
    width: 75%;
    /* height: 5px; */
    position: relative;
}

.line {
    /*  */
    background-color: rgba(0, 0, 0, 0.318);
    height: 2px;
    position: absolute;
    top: 50px;
    bottom: 0;
    right: 0;
    left: 0;
}

.process-item {
    padding: 20px;
}

.process-icon{
    font-size: 30px;
}

.first-section {
    background-color: white;
    color: black;
    position: absolute;
    top: 0px;
    /* bottom: 0; */
    right: 0;
}

.second-section {
    background-color: white;
    color: black;
    position: absolute;
    top: 0;
    /* bottom: 0; */
    right: 40%;
    left: 40%;
}

.third-section {
    background-color: white;
    color: black;
    position: absolute;
    top: 0;
    /* bottom: 0; */
    left: 0;
}
</style>