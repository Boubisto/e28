<template>
  <div id="product-page">
    <div v-if="product">
      <show-product :product="product" :includeDetails="true"></show-product>

      <button data-test="add-to-cart-button" v-on:click="addToCart">
        Add to Cart
      </button>

      <transition name="fade">
        <div class="alert" v-if="addAlert">Your cart has been updated!</div>
      </transition>
    </div>
    <div v-if="user">
      <button v-if="isFavorite" @click="removeFromFavorites()">
        Remove from favorites
      </button>
      <button v-else @click="addToFavorites()">❤ Add to favorites</button>
    </div>

    <div v-if="productNotFound">
      <p>Product {{ id }} not found.</p>

      <router-link v-bind:to="'/products'">Go to all products </router-link>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import useFavorite from "@/features/useFavorite";
import { cart } from "@/common/app.js";
export default {
  setup(props) {
    // Here we use JS's "destructuring assignment" to capture the returned variables from useFavorite
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorite(
      props.id
    );

    // Don't forget to return any of the variables you want to use in the component
    return { isFavorite, addToFavorites, removeFromFavorites };
  },
  name: "",
  props: ["id"],
  components: {
    "show-product": ShowProduct,
  },
  data() {
    return {
      addAlert: false,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(this.id);
    },
    productNotFound() {
      return this.product == null;
    },
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    addToCart() {
      cart.add(this.product.id, 1);
      this.$store.commit("setCartCount", cart.count());
      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 2000);
    },
  },
};
</script>