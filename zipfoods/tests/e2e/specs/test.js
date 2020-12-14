// https://docs.cypress.io/api/introduction/api.html

describe('Zipfoods', () => {

   // Define a product we can use throughout our tests
   let product = {
    name: 'Driscoll’s Strawberries',
    id: 1
}


  it('Visits the Homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Products')
  })

  it('Shows all the products', () => {
    cy.visit('/products');
    cy.contains('[data-test="product-name"]', product.name);

    cy.get('[data-test="product-name"').should('have.length', 10);
    
    cy.get('[data-test="product-name"').contains('Driscoll’s Strawberries').click();
    cy.contains('.price', '$4.99');


  })

  it('interacts with cart', () => {

    cy.visit('/products/' + product.id);

    cy.get('[data-test="add-to-cart-button"]').click();

    cy.contains('[data-test="cart-count"]', 1);

    cy.visit('/cart');

    cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);

    cy.get('[data-test="remove-from-cart-button"]').click();

    cy.contains('[data-test="cart-count"]', 0);

    cy.contains('No items');

})

})
