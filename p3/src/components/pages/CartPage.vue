<template>
  <div id="cart-page">
    <h1>Your Cart</h1>

    <div v-if="items.length == 0">No items</div>

    <ul data-test="cart-contents" class="cleanList" v-if="recipesLoaded">
      <li v-for="item in items" :key="item.id">
        {{ item.quantity }} x {{ getRecipeDetails(item.id).name }}
        <button
          data-test="remove-from-cart-button"
          @click="removeFromCart(item.id)"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { cart } from "@/common/app.js";
export default {
  props: [],
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.items = cart.getItems();
  },
  computed: {
    recipesLoaded() {
      return this.recipes.length > 0;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    getRecipeDetails(id) {
      return this.recipes.filter((recipe) => {
        return recipe.id == id;
      }, id)[0];
    },
    removeFromCart(id) {
      cart.remove(id);
      this.$store.commit("setCartCount", cart.count());
    },
  },
};
</script>