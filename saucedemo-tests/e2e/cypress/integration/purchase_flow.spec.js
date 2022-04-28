

describe('user login', () => {
  it('Login as standard user', () => { 
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('#inventory_container').should('be.visible')
  })

  it('Log out', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#login_button_container').should('be.visible')
  })
})

describe('purchase flow', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('Buy product', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('#remove-sauce-labs-backpack').should('be.visible')
    cy.get('[class="shopping_cart_badge"]').should('have.text', '1')

    cy.get('#shopping_cart_container').click()
    cy.get('#item_4_title_link').should('have.text', 'Sauce Labs Backpack')
    cy.get('.cart_quantity').should('have.text', '1')

    cy.get('[data-test="checkout"]').click() 
    cy.get('#checkout_info_container').should('be.visible')

    cy.get('[data-test="firstName"]').type('Michael')
    cy.get('[data-test="lastName"]').type('Jordan')
    cy.get('[data-test="postalCode"]').type('90210')
    cy.get('[data-test="continue"]').click()

    cy.get('.summary_subtotal_label').should('have.text', 'Item total: $29.99')
    cy.get('.summary_tax_label').should('have.text', 'Tax: $2.40')
    cy.get('.summary_total_label').should('have.text', 'Total: $32.39')

    cy.get('[data-test="finish"]').click()
    cy.get('.title').should('have.text', 'Checkout: Complete!')
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')

    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')
  })
})
