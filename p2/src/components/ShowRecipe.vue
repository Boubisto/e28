<template>
  <div class="recipe">
    <div class="recipe-name">{{ recipe.name }}</div>
    <img class="recipe-thumb" v-bind:src="imageSource" />

    <p class="description" v-if="includeDetails">
      {{ recipe.description }}
    </p>
    <p class="calorie" v-if="includeDetails">${{ recipe.calorie }}</p>
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