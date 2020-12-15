<template>
  <div>
    <h2>Add a Recipe</h2>

    <small class="form-help">* Required field</small>

    <div id="inputs">
      <label for="name">* Name</label>
      <input
        type="text"
        data-test="recipe-name-input"
        v-model="recipe.name"
        id="name"
        v-on:blur="validate()"
      />
      <small class="form-help">Min: 3, Max: 10</small>
      <error-field
        v-if="errors && 'name' in errors"
        :errors="errors.name"
      ></error-field
      ><br /><br />

      <label for="ingredient">* Ingredient</label>
      <textarea
        data-test="recipe-ingredient-textarea"
        v-model="recipe.ingredient"
        id="ingredient"
        v-on:blur="validate()"
      ></textarea>
      <small class="form-help">Min:10</small>
      <error-field
        v-if="errors && 'ingredient' in errors"
        :errors="errors.ingredient"
      ></error-field
      ><br /><br />

      <label for="sku">* SKU:</label>
      <input
        type="text"
        data-test="recipe-sku-input"
        v-model="recipe.sku"
        id="sku"
        v-on:blur="validate()"
      />
      <small class="form-help">Min: 3, Max: 10. Letters and dashes only.</small>
      <error-field
        v-if="errors && 'sku' in errors"
        :errors="errors.sku"
      ></error-field
      ><br /><br />

      <label for="description">* Description</label>
      <textarea
        data-test="recipe-description-textarea"
        v-model="recipe.description"
        id="description"
        v-on:blur="validate()"
      ></textarea>
      <small class="form-help">Min:10</small>
      <error-field
        v-if="errors && 'description' in errors"
        :errors="errors.description"
      ></error-field
      ><br /><br />

      <label for="instruction">* Instruction</label>
      <textarea
        data-test="recipe-instruction-textarea"
        v-model="recipe.instruction"
        id="instruction"
        v-on:blur="validate()"
      ></textarea>
      <small class="form-help">Min:10</small>
      <error-field
        v-if="errors && 'instruction' in errors"
        :errors="errors.instruction"
      ></error-field
      ><br /><br />

      <label for="time">* Time (in min):</label>
      <input
        type="number"
        data-test="recipe-time-input"
        v-model="recipe.time"
        id="time"
        v-on:blur="validate()"
      />
      <error-field
        v-if="errors && 'time' in errors"
        :errors="errors.time"
      ></error-field
      ><br /><br />

      <label for="calories">* Calories (in Kcal):</label>
      <input
        type="number"
        data-test="recipe-calories-input"
        v-model="recipe.calories"
        id="calories"
        v-on:blur="validate()"
      />
      <error-field
        v-if="errors && 'calories' in errors"
        :errors="errors.calories"
      ></error-field
      ><br /><br />

      <label for="perishable" class="form-checkbox-label">
        <input
          data-test="recipe-perishable-checkbox"
          type="checkbox"
          v-model="recipe.perishable"
          id="perishable"
        />
        Perishable? </label
      ><br /><br />

      <label for="difficulty">Difficulty: </label>
      <select v-model="recipe.difficulty" id="difficulty">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option></select
      ><br /><br />

      <label for="allergens">* Allergens</label>
      <textarea
        data-test="recipe-allergens-textarea"
        v-model="recipe.allergens"
        id="instruction"
        v-on:blur="validate()"
      ></textarea>
      <small class="form-help">Min:10</small>
      <error-field
        v-if="errors && 'allergens' in errors"
        :errors="errors.allergens"
      ></error-field
      ><br /><br />

      <label for="ustensil">* Ustensil</label>
      <textarea
        data-test="recipe-ustensil-textarea"
        v-model="recipe.ustensil"
        id="ustensil"
        v-on:blur="validate()"
      ></textarea>
      <small class="form-help">Min:10</small>
      <error-field
        v-if="errors && 'ustensil' in errors"
        :errors="errors.ustensil"
      ></error-field
      ><br /><br />
    </div>

    <button @click="addRecipe" data-test="add-recipe-button">Add Recipe</button>

    <transition name="fade">
      <div
        data-test="recipe-added-confirmation"
        class="alert"
        v-if="showConfirmationMessage"
      >
        Your recipe
        <em>{{ addedName }}</em> was added!
      </div>
    </transition>

    <div class="form-feedback-error" v-if="errors">
      Please correct the above errors
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import ErrorField from "@/components/ErrorField.vue";
import Validator from "validatorjs";
export default {
  components: {
    "error-field": ErrorField,
  },
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
    validate() {
      let validator = new Validator(this.recipe, {
        name: "required|between:3,10",
        ingredient: "required|min:10",
        description: "required|min:10",
        sku: "required|between:3,10|alpha_dash",
        time: "required|numeric",
        calorie: "required|numeric",
        instruction: "required|min:10",
        allergens: "required|min:10",
        ustensil: "required|min:10",
      });
      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }
      return validator.passes();
    },
    addRecipe() {
      if (this.validate()) {
        axios.post("/recipe", this.recipe).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.$store.dispatch("fetchRecipes");
            this.showConfirmationMessage = true;
            this.addedName = this.recipe.name;
            setTimeout(() => (this.showConfirmationMessage = false), 3000);
            this.recipe = {
              name: "",
              slug: "",
              ingredient: "",
              description: "",
              instruction: "",
              time: "",
              calorie: "",
              perishable: true,
              allergens: "",
              ustensil: "",
            };
          }
        });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
#inputs {
  text-align: left;
}
</style>