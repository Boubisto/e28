<template>
  <div class="recipe">
    <div class="recipe-name">{{ recipe.name }}</div>
    <div class="recipe-description">{{ recipe.description }}</div>
    <div class="recipe-difficulty">Difficulty: {{ recipe.difficulty }}</div>
    <div class="recipe-calorie">Calorie: {{ recipe.calorie }}Kcal</div>
    <img class="recipe-thumb" v-bind:src="imageSource" />

    <p class="description" v-if="includeDetails">
      {{ recipe.description }}
    </p>
    <p v-if="includeDetails">Ingredients: {{ recipe.ingredient }}</p>
    <p class="calorie" v-if="includeDetails">
      Calories: {{ recipe.calorie }} Kcal
    </p>
    <p class="ustensil" v-if="includeDetails">
      Ustensil: {{ recipe.ustensil }}
    </p>
    <p class="allergens" v-if="includeDetails">
      Allergens: {{ recipe.allergens }}
    </p>
    <p class="instruction" v-if="includeDetails">
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