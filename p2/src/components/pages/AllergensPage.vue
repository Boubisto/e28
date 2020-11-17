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
  props: ["recipes"],
  data: function () {
    return {};
  },
  computed: {
    allergens() {
      let allergens = this.recipes.map((recipe) =>
        recipe.allergens.split(",")
      );
      let mergedAllergens = [].concat.apply([], allergens);
      // Return unique, sorted allergens
      return [...new Set(mergedAllergens)].sort();
    },
  },
};
</script>

<style scoped>
</style>