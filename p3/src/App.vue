<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/images/logo2.png" />
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
          >
            <span data-test="cart-count" v-if="link == 'Cart'"
              >({{ cartCount }})</span
            >
            {{ link }}
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
import { cart } from "@/common/app.js";
export default {
  name: "App",
  data() {
    return {
      /* Store links in an array to maintain order */
      links: ["Recipes", "Allergens", "Add a new recipe", "Account", "Cart"],
      /* Map links to the appropriate component */
      paths: {
        Home: "/",
        Recipes: "/recipes",
        Allergens: "/allergens",
        "Add a new recipe": "/recipes/new",
        Account: "/account",
        Cart: "/cart",
      },
    };
  },
  methods: {},
  mounted() {
    this.$store.dispatch("fetchRecipes");
    this.$store.commit("setCartCount", cart.count());
  },
  computed: {
    cartCount() {
      return this.$store.state.cartCount;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>

<style
src= "@/assets/scss/styles/recipes.css">
</style>
