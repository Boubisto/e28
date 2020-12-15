<template>
  <div>
    <h1>Allergens</h1>
    <ul class="cleanList">
      <li v-for="(allergen, id) in allergens" :key="id">
        {{ allergen }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data: function () {
    return {};
  },
  computed: {
    allergens() {
      let allergens = this.recipes.map((recipe) => {
        if (recipe.allergens) {
          return recipe.allergens.split(",");
        }
      });
      let mergedAllergens = [].concat.apply([], allergens);
      // Return unique, sorted allergens
      return [...new Set(mergedAllergens)].sort();
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>

<style scoped>
</style>