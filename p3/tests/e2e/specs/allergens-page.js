describe('Allergens Page', () => {
    it('shows the allergens', () => {

        cy.visit('/allergens');

        // First category should be `baking`
        cy.contains('[data-test="recipe-allergen"]', 'Milk');

        // With seed data, we should have at least 9 allergens
        cy.get('[data-test="recipe-allergen"]').its('length').should('be.gte', 9);
    })
})