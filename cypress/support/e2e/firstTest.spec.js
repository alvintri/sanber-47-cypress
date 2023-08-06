describe('My First Test', () => {
    it('Get commands querying',()=>{
        //Buka Page dari sebuah browser
        cy.visit('https://example.cypress.io')

        //Web sudah contains element/kata
        cy.contains('Kitchen Sink')

        //Klik element
        cy.contains('get').click()
        cy.contains('Querying')

        //Back to one page
    })

    it('Success Input Email', () => {
        //cy.visit('https://example.cypress.io')
        cy.contains('Kitchen Sink')
        cy.contains('type').click()

        //Input sebuah tulisan kedalam sebuah form 
        cy.get('#email1')
             .type('fakeemail@gmail.com')    
             .should('have.value','fakeemail@gmail.com')  
    })
})