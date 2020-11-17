<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>

    <router-view
      v-bind:recipes="recipes"
      v-on:update-recipes="updateRecipes()"
    ></router-view>
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  name: "App",
  data() {
    return {
      recipes: [],
      /* Store links in an array to maintain order */
      links: ["home", "recipes", "allergens"],
      /* Map links to the appropriate component */
      paths: {
        home: "/",
        recipes: "/recipes",
        allergens: "/allergens",
      },
    };
  },
  methods: {
    updateRecipes() {
      axios.get("recipe").then((response) => {
        this.recipes = response.data.recipe;
      });
    },
  },
  mounted() {
    this.updateRecipes();
  },
};
</script>

<style
src= "@/assets/scss/styles/recipes.css">
</style>
