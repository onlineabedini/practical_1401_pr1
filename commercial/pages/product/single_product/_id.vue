<template>
  <div>
    <add_to_card></add_to_card>
    <information></information>
  </div>
</template>

<script>
import add_to_card from "@/components/commerce_components/single_product/add_to_cart_component.vue";
import information from "@/components/commerce_components/single_product/inforamtion_card.vue";
export default {
  components: {
    add_to_card,
    information,
  },
}
</script>

<style>

</style>