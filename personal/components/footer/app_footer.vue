<template>
    <div class="footer-div">
        <div class="container">
            <div class="row py-5">
               <div class="mb-4 p-4">
                    <!-- Facebook -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

                    <!-- Twitter -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>

                    <!-- Instagram -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

                    <!-- Linkedin -->
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
                </div>
                           
                <div class="p-4 pb-0">
                    <div class="text-white">
                            <div class="row">
                                <div class="col-auto">
                                    <p class="pt-1">
                                    <strong>با من در تماس باشید</strong>
                                    </p>
                                </div>

                                <div class="col-md-5 col-12">
                                    <div class="form-outline form-white mb-4">
                                    <input class="form-control" placeholder="ادرس ایمیل خود را وارد کنید" />
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-outline-light mb-4">
                                        ثبت
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'app_footer'
}
</script>

<style scoped>


.footer-div {
  background-color:rgb(45, 45, 45);
  font-family: "IRANSans yekan";
}

.input-offer-news input {
  background-color: #666666;
  opacity: 0.4;
  border-radius: 9px;
  color: #f2f2f2;
}

.input-offer-news ::placeholder {
  color: #f2f2f2;
}
.input-offer-news button {
  background-color: #587aa6;
  border: none;
  border-radius: 9px;
}

</style>
