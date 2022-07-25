<template>


<div>

    <div class="container">
        <div class="row">
            <div class="col-md-3">
                    <single_card

                    
                    ></single_card>
            </div>
            <div class="col-md-3">

            </div>
            <div class="col-md-3">

            </div>
            <div class="col-md-3">

            </div>

        </div>

    </div>


</div>
  
</template>

<script>
import single_card from "@/components/commerce_components/products_grid/single_card";
export default {
  comments: {
    single_card,
  },
  data() {
    return{
        products:[
        ]
    }
  }
};
</script>

<style>
</style>