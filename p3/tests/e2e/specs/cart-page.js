describe('Cart Page', () => {

    // Test recipe
    let recipe = {
        name: 'Smokehouse Pulled Chicken Bowls',
        id: 1
    }

    it('adds and removes from cart', () => {

        // Add to cart from recipe page
        cy.visit('/recipes/' + recipe.id);
        cy.get('[data-test="add-to-cart-button"]').click();

        // Confirm cart shows recipe
        cy.visit('/cart');
        cy.contains('[data-test="cart-contents"]', '1 x ' + recipe.name);

        // Remove from cart 
        cy.get('[data-test="remove-from-cart-button"]').click();
        cy.contains('[data-test="cart-count"]', 0);
        cy.contains('No items');
    })
})