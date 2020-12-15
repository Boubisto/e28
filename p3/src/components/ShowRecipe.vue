<template>
  <div class="recipe">
    <div class="recipe-name" data-test="recipe-name">{{ recipe.name }}</div>
    <div class="recipe-description" data-test="recipe-description">
      {{ recipe.description }}
    </div>
    <div class="recipe-difficulty" data-test="recipe-difficulty">
      Difficulty: {{ recipe.difficulty }}
    </div>
    <div class="recipe-calorie" data-test="recipe-calorie">
      Calorie: {{ recipe.calorie }}Kcal
    </div>
    <img class="recipe-thumb" v-bind:src="imageSource" />

    <p
      class="recipe-description"
      data-test="recipe-description"
      v-if="includeDetails"
    >
      {{ recipe.description }}
    </p>
    <p v-if="includeDetails">Ingredients: {{ recipe.ingredient }}</p>
    <p class="recipe-calorie" data-test="recipe-calorie" v-if="includeDetails">
      Calories: {{ recipe.calorie }} Kcal
    </p>
    <p
      class="recipe-ustensil"
      data-test="recipe-ustensil"
      v-if="includeDetails"
    >
      Ustensil: {{ recipe.ustensil }}
    </p>
    <p
      class="recipe-allergen"
      data-test="recipe-allergen"
      v-if="includeDetails"
    >
      Allergens: {{ recipe.allergen }}
    </p>
    <p
      class="recipe-instruction"
      data-test="recipe-instruction"
      v-if="includeDetails"
    >
      Instructions: {{ recipe.instruction }}
    </p>
  </div>
</template>

<script>
export default {
  name: "show-recipe",
  props: ["recipe", "includeDetails"],
  data: function () {
    return {};
  },
  computed: {
    imageSource() {
      try {
        return require("@/assets/images/recipes/" + this.recipe.id + ".jpg");
      } catch (e) {
        return require("@/assets/images/recipes/image-not-available.jpg");
      }
    },
  },
};
</script>