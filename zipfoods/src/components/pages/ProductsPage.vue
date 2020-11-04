<template>
  <div id="products">
    <h1>Products</h1>

    <router-link
      v-for="product in products"
      :key="product.id"
      v-bind:to="'/products/' + product.id"
      exact
    >
      <show-product :product="product"></show-product>
    </router-link>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import { products } from "@/products.js";
export default {
  name: "",
  components: {
    "show-product": ShowProduct,
  },
  data: function () {
    return {
      products: products,
    };
  },
};
</script>

<style scoped>
</style>