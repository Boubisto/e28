<template>
  <div>
    <h2>Add a New Recipe</h2>

    <div id="inputs">
      <form>
        <label for="name">Name: </label>
        <input
          type="text"
          v-model="recipe.name"
          id="name"
          v-on:blur="validate()"
        /><br /><br />
        <small class="form-help">Min: 3, Max: 50</small>
        <error-field
          v-if="errors && 'name' in errors"
          :errors="errors.name"
        ></error-field>

        <label for="ingredient">Ingredient: </label>
        <textarea
          v-model="recipe.ingredient"
          id="ingredient"
          v-on:blur="validate()"
        ></textarea
        ><br /><br />
        <small class="form-help">Min: 3, Max: 100</small>
        <error-field
          v-if="errors && 'ingredient' in errors"
          :errors="errors.ingredient"
        ></error-field>

        <label for="sku">SKU:</label>
        <input
          type="text"
          v-model="recipe.sku"
          id="sku"
          v-on:blur="validate()"
        /><br /><br />
        <small class="form-help"
          >Min: 3, Max: 100. Letters and dashes only.</small
        >
        <error-field
          v-if="errors && 'sku' in errors"
          :errors="errors.sku"
        ></error-field>

        <label for="description">Description: </label>
        <textarea
          v-model="recipe.description"
          id="description"
          v-on:blur="validate()"
        ></textarea
        ><br /><br />
        <small class="form-help">Min: 3, Max: 100</small>
        <error-field
          v-if="errors && 'description' in errors"
          :errors="errors.description"
        ></error-field>

        <label for="instruction">Instruction: </label>
        <textarea
          v-model="recipe.instruction"
          id="instruction"
          v-on:blur="validate()"
        ></textarea
        ><br /><br />
        <small class="form-help">Min: 3, Max: 100</small>
        <error-field
          v-if="errors && 'instruction' in errors"
          :errors="errors.instruction"
        ></error-field>

        <label for="time">Time: </label>
        <input
          type="number"
          v-model="recipe.time"
          id="time"
          min="10"
          max="120"
          v-on:blur="validate()"
        /><br /><br />
        <small class="form-help">Enter a whole number</small>
        <error-field
          v-if="errors && 'time' in errors"
          :errors="errors.time"
        ></error-field>

        <label for="calorie">Calories:</label>
        <input
          type="text"
          v-model="recipe.calorie"
          id="calorie"
          v-on:blur="validate()"
        /><br /><br />
        <small class="form-help">Enter a whole number</small>
        <error-field
          v-if="errors && 'calorie' in errors"
          :errors="errors.calorie"
        ></error-field>

        <label for="difficulty">Difficulty: </label>
        <select
          v-model="recipe.difficulty"
          id="difficulty"
          v-on:blur="validate()"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option></select
        ><br /><br />

        <label for="allergens">Allergens: </label>
        <textarea
          v-model="recipe.allergens"
          id="allergens"
          v-on:blur="validate()"
        ></textarea
        ><br /><br />
        <small class="form-help">Min:5 </small>
        <error-field
          v-if="errors && 'allergens' in errors"
          :errors="errors.allergens"
        ></error-field>

        <label for="ustensil">Ustensil: </label>
        <textarea
          v-model="recipe.ustensil"
          id="ustensil"
          v-on:blur="validate()"
        ></textarea
        ><br /><br />
        <small class="form-help">Min:5 </small>
        <error-field
          v-if="errors && 'ustensil' in errors"
          :errors="errors.ustensil"
        ></error-field>

        <label for="perishable" class="form-checkbox-label">
          <input
            type="checkbox"
            v-model="recipe.perishable"
            id="perishable"
            v-on:blur="validate()"
          />
          Perishable?
        </label>
        <input type="reset" />
      </form>
    </div>

    <button @click="addRecipe">Add recipe</button>

    <transition name="fade">
      <div
        data-test="recipe-added-confirmation"
        class="alert"
        v-if="showConfirmationMessage"
      >
        Your recipe <em>{{ addedName }}</em> was added!
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
        name: "required|between:3,50",
        ingredient: "required|between:3,100",
        sku: "required|between:3,100|alpha_dash",
        description: "required|between:3,100",
        instruction: "required|between:3,100",
        time: "required|numeric",
        calorie: "required|numeric",
        allergens: "required|min:5",
        ustensil: "required|min:5",
      });

      this.errors = validator.errors.all();

      return validator.passes();
    },
    addRecipe() {
      if (this.errors.length == 0) {
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
              ingredient: "",
              sku: "",
              description: "",
              instruction: "",
              time: "",
              calorie: "",
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