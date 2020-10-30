// Refering to the documentation for Cypress, this test sets up an local development server on localhost. 
// Src: https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server

describe('Finder End2End', function () {
    it('should search correctly', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Age')
    })

describe('Check that person information works with a popup', function () {
    it('Person popup works', function () {
        cy.visit('http://localhost:3000')
        cy.get('.person').contains('Abby Johnson').click({force: true})
        cy.window().contains('Abby Johnson') 
    });
});

describe('Test validation of form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')

        cy.get('button[name="addButton"]').click()

        cy.get('input[name="fname"]').type('Ola')

        cy.get('input[name="lname"]').type('Nordmann')

        cy.get('input[name="age"]').type('45')

        cy.get('select').select('Kalvskinnet')

        cy.get('input[name="bio"]').type('Heia Norge')

        cy.get('button[name="submit-form-btn"]').click()
    });

    it('Checks if recently person is added.', function() {
        cy.get('.search-field')
        .type('Ola Nordmann')
        .should('have.value', 'Ola Nordmann')
        cy.get('form').contains("Search").click()
        assert(cy.get('.person').contains('Ola Nordmann'))
        })
});

describe('Test invalid form', () => { 
    it('Test invalid form', () => {
        cy.get('button[name="addButton"]').click()

        cy.get('input[name="fname"]').type('Ola')

        cy.get('input[name="fname"]').clear()

        cy.get('button[name="submit-form-btn"]').click()

        cy.get('.form-popup').submit()
        
    }); 
});


})
