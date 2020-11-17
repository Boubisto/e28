<template>
  <div>
    <h2>Add a New Recipe</h2>

    <div id="inputs">
      <form>
        <label for="name">Name: </label>
        <input type="text" v-model="recipe.name" id="name" /><br /><br />

        <label for="ingredient">Ingredient: </label>
        <textarea v-model="recipe.ingredient" id="ingredient"></textarea
        ><br /><br />

        <label for="sku">SKU:</label>
        <input type="text" v-model="recipe.sku" id="sku" /><br /><br />

        <label for="description">Description: </label>
        <textarea v-model="recipe.description" id="description"></textarea
        ><br /><br />

        <label for="instruction">Instruction: </label>
        <textarea v-model="recipe.instruction" id="instruction"></textarea
        ><br /><br />

        <label for="time">Time: </label>
        <input
          type="number"
          v-model="recipe.time"
          id="time"
          min="10"
          max="120"
        /><br /><br />

        <label for="calorie">Calories:</label>
        <input type="text" v-model="recipe.calorie" id="calorie" /><br /><br />

        <label for="difficulty">Difficulty: </label>
        <select v-model="recipe.difficulty" id="difficulty">
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option></select
        ><br /><br />

        <label for="allergens">Allergens: </label>
        <textarea v-model="recipe.allergens" id="allergens"></textarea
        ><br /><br />

        <label for="ustensil">Ustensil: </label>
        <textarea v-model="recipe.ustensil" id="ustensil"></textarea
        ><br /><br />

        <label for="perishable" class="form-checkbox-label">
          <input type="checkbox" v-model="recipe.perishable" id="perishable" />
          Perishable?
        </label>
        <input type="reset" />
      </form>
    </div>

    <button @click="addRecipe">Add recipe</button>

    {{ errors }}
  </div>
</template>

<script>
import { axios } from "@/app.js";
export default {
  data() {
    return {
      errors: null,
      showConfirmationMessage: false,
      recipe: {
        name: "",
        ingredient: "",
        sku: "",
        description: "",
        instruction: "",
        time: "",
        calorie: "",
        perishable: true,
        difficulty: "",
        allergens: "",
        ustensil: "",
      },
    };
  },
  methods: {
    addRecipe() {
      axios.post("/recipe", this.recipe).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
          this.showConfirmationMessage = true;
        }
      });
    },
  },
};
</script>

<style lang='css' scoped>
#inputs {
  text-align: left;
}
</style>