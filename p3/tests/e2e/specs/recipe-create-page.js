describe('Recipe Create Page', () => {

    // Test recipe
    let recipe = {
        name: 'My New Recipe',
        ingredient: "oil, chicken,rice,eggs",
        // Append a Unix timestamp to the end of the slug, ensuring it's a unique value
        sku: 'my-new-recipe-' + Date.now(),
        description: 'the perfect recipe',
        time: 30,
        calorie: 900,
        difficulty: "medium",
        ustensil: "pan, pot, knife",
    }

    it('adds a new recipe', () => {

        // First we have to login, because only auth'd users can add recipes
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.get('[data-test="add a recipe-link"]').click();
        cy.get('[data-test=recipe-name-input]').clear().type(recipe.name);
        cy.get('[data-test=recipe-ingredient-input]').clear().type(recipe.ingredient);
        cy.get('[data-test=recipe-sku-input]').clear().type(recipe.sku);
        cy.get('[data-test=recipe-description-input]').clear().type(recipe.description);
        cy.get('[data-test=recipe-time-input]').clear().type(recipe.time);
        cy.get('[data-test=recipe-perishable-checkbox]').check();
        cy.get('[data-test=recipe-calorie-textarea]').clear().type(recipe.calorie);
        cy.get('[data-test=add-recipe-button]').click();
        cy.get('[data-test="recipe-added-confirmation"]').should('exist');

        // Go to the recipes page and confirm our new recipe is visible there
        cy.get('[data-test="recipe-link"]').click();
        cy.contains(recipe.name);
    });

    it('shows error messages if new recipe data is invalid', () => {

        cy.login();

        cy.get('[data-test="recipe-link"]').click();

        // Try a SKU we know is taken
        cy.get('[data-test=recipe-sku-input]').clear().type('chicken-sausage-rigatoni');
        cy.get('[data-test=add-recipe-button]').click();
        cy.contains("The sku has already been taken.");
    });
})