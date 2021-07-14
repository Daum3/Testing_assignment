Cypress.on('uncaught:exception', (err, runnable) => { // this code helps cypress continue to run when exception errors are returned.
  return false
})
context('Actions', () => {
   beforeEach(() => {
     cy.visit('http://automationpractice.com/index.php')// visits to desired website
   })

   it('Assigment', () => {
    cy.get('#search_query_top').type('Printed Dress')
    cy.get('#searchbox > .btn').click()
    cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')
    cy.get('h2 > .ajax_cart_product_txt').contains('There is 1 item in your cart.')
    cy.wait(2500)
    cy.get('#layer_cart_product_title').contains('Printed Dress')
    cy.get('.layer_cart_cart').contains('Proceed to checkout')
    cy.get('.button-container > .button-medium > span').click()
    cy.get('.cart_description > .product-name > a').contains('Printed Dress')
    cy.get('#product_4_16_0_0 > .cart_avail').contains('In stock')
    cy.get('.cart_navigation > .button > span').click()

    // registering account if not registered
    // cy.get('#email_create').type('testas@test.test')
    // cy.get('#SubmitCreate > span').contains('Create an account').click()
    // cy.wait(5000)
    // cy.get('#id_gender1').click()
    // cy.get('#customer_firstname').type('testas')
    // cy.get('#customer_lastname').type('testauskas')
    // cy.get('#email').should('have.value', 'testas@test.test')
    // cy.get('#passwd').type('Q!123456789W@e3')
    // cy.get('#address1').type('testausko gatve 150')
    // cy.get('#city').type('testausmiestis')
    // cy.get('[id="id_state"]').trigger('click').select('Alabama')
    // cy.get('#postcode').type('35748')
    // cy.get('#phone_mobile').type('+3706357548')
    // cy.get('#submitAccount > span').click()
    // next page
    // cy.get('#ordermsg > .form-control').type('Automated testing using cypress')
    // cy.get('.cart_navigation > .button > span').click()

    // if atready registered account
    cy.get('#email').type('testas@test.test')
    cy.get('#passwd').type('Q!123456789W@e3')
    cy.get('#SubmitLogin > span').click()
    // next page
    cy.get('#ordermsg > .form-control').type('Automated testing using cypress')
    cy.get('.cart_navigation > .button > span').click()
    // next page
    cy.get('#delivery_option_536008_0').click()
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
    // next page
    cy.get('.bankwire').click()
    cy.get('#cart_navigation > .button > span').click()
    cy.contains('complete') // checks if completed 

 });
})
