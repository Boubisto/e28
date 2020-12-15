<template>
  <div id="recipes">
    <h1>Recipes</h1>

    <router-link
    data-test="recipe-link"
      v-for="recipe in recipes"
      :key="recipe.id"
      v-bind:to="'/recipes/' + recipe.id"
      exact
    >
      <show-recipe :recipe="recipe"></show-recipe>
    </router-link>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  props: [],
  data: function () {
    return {};
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>

<style scoped>
</style>