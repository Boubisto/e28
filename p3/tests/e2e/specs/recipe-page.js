describe('Recipe Page', () => {

    // Test product
    let recipe = {
        name: 'Smokehouse Pulled Chicken Bowls',
        id: 1
    }

    it('shows a recipe', () => {
        cy.visit('/recipes/' + recipe.id);
        cy.contains('[data-test="recipe-name"]', recipe.name);
    })

    it('adds to cart', () => {
        cy.visit('/recipes/' + recipe.id);

        cy.get('[data-test="add-to-cart-button"]').click();

        cy.get('[data-test="add-to-cart-confirmation"]').should('exist');
        cy.contains('[data-test="cart-count"]', 1);
    })
})