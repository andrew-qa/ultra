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
