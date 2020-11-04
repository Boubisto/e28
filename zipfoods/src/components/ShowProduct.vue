<!-- src/components/ShowProduct.vue -->
<template>
  <div class="product">
    <div class="product-name">{{ product.name }}</div>
    <img
      class="product-thumb"
      v-bind:src="require('@/assets/images/products/' + product.id + '.jpg')"
    />

    <p class="description" v-if="includeDetails">
      {{ product.description }}
    </p>
    <p class="price" v-if="includeDetails">${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: "show-product",
  props: ["product", "includeDetails"],
  data: function () {
    return {};
  },
};
</script>