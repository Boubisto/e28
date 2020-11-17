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
      links: ["Recipes", "Allergens", "Add a new Recipe"],
      paths: {
        home: "/",
        Recipes: "/recipes",
        Allergens: "/allergens",
        "Add a new Recipe": "/recipes/new",
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
