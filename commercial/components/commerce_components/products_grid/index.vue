<template>
  <div>
    <div class="text-center p-3">
      <h3>سرویس های پخش فیلم و سریال</h3>
    </div>
    <div class="row p-5 mx-5">
      <a href="#" class="col-md-3">
        <div class="zoom-hover">
          <single_card :product="products[0]"></single_card>
        </div>
      </a>
      <a href="#" class="col-md-3">
        <div class="zoom-hover">
          <single_card :product="products[1]"></single_card>
        </div>
      </a>
      <a href="#" class="col-md-3">
        <div class="zoom-hover">
          <single_card :product="products[2]"></single_card>
        </div>
      </a>
      <a href="#" class="col-md-3">
        <div class="zoom-hover">
          <single_card :product="products[3]"></single_card>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import single_card from "@/components/commerce_components/products_grid/single_card.vue";
export default {
  components: {
    single_card,
  },
  data() {
    return {
      products: [
        {
          cardTitle: "Product 1",
          price: "200,000",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/834/de93d8915c33a52d93110b879648f139.png?w=600&h=600&q=90",
        },
        {
          cardTitle: "Product 2",
          price: "300,000",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/923/c92abe827f215a8fedf20da320cf4c30.jpg?w=600&h=600&q=90",
        },
        {
          cardTitle: "Product 3",
          price: "400,000",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/1138/168cac051a67d429ebbf5ac2ff3aaa2c.jpg?w=600&h=600&q=90",
        },
        {
          cardTitle: "Product 4",
          price: "500,000",
          cardImage:
            "https://license-market.ir/uploads/image/rootimage/1229/f7ff5a8927eb359232ef84ff8cf49f77.jpg?w=600&h=600&q=90",
        },
      ],
    };
  },
};
</script>
<style>
.zoom-hover :hover {
  opacity: 0.7;
  transform: scale(1.02);
  transition: all 0.2s ease;
}
a {text-decoration: none;}
</style>