<template>
  <div id="recipe-page">
    <div v-if="recipe">
      <show-recipe :recipe="recipe" :includeDetails="true"></show-recipe>

      <button data-test="add-to-cart-button" v-on:click="addToCart">
        Add to Cart
      </button>

      <transition name="fade">
        <div class="alert" v-if="addAlert">Your cart has been updated!</div>
      </transition>
    </div>

    <div v-if="recipeNotFound">
      <p>Recipe {{ id }} was not found.</p>

      <router-link v-bind:to="'/recipes'"
        >Please see all available recipes
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
import { cart } from "@/common/app.js";
export default {
  name: "",
  props: ["id"],
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {
      addAlert: false,
    };
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById(this.id);
    },
    recipeNotFound() {
      return this.recipe == null;
    },
    recipes() {
      return this.$store.state.recipes;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    addToCart() {
      cart.add(this.recipe.id, 1);
      this.$store.commit("setCartCount", cart.count());
      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 2000);
    },
  },
};
</script>