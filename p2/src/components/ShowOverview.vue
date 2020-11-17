<template>
  <div id="overview">
    <h2>Recipes</h2>
    <ul class="cleanList">
      <li v-for="recipe in overviewRecipes" :key="recipe.id">
        {{ recipe.name }}
      </li>
      <li v-for="recipe in overviewRecipes" :key="recipe.id">
        {{ recipe.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "show-overview",
  props: ["allergen"],
  data: function () {
    return {};
  },
  computed: {
    overviewRecipes() {
      return this.recipes.filter((recipe) => {
        return recipe.allergens.includes(this.allergen);
      }, this.allergen);
    },
  },
};
</script>