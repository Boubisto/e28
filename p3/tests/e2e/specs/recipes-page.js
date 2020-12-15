describe('Recipes Page', () => {

    // Define a recipe we can use throughout our tests
    let recipe = {
        name: 'Smokehouse Pulled Chicken Bowls',
        id: 1
    }

    it('shows all the recipes', () => {

        cy.visit('/recipes')
        cy.contains('h1', 'Recipes')

        // Confirm we see at least 10 recipes (that's how many recipe seeds we have)
        cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 10)

        // Confirm we see a our test recipe
        cy.contains('[data-test="recipe-name"]', recipe.name)

        // Confirm we can click on a recipe and get to its individual page
        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();

        // Confirm the test recipe page loads
        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.url().should('include', recipe.id)

    })

    it('shows the correct recipe images', () => {

        cy.visit('/recipes')

        cy.get('[data-test=recipe-image-' + recipe.id + ']')
            .should('have.attr', 'src')
            .should('include', recipe.id)
    })

})