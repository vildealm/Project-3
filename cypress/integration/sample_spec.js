// Refering to the documentation for Cypress, this test sets up an local development server on localhost. 
// Src: https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server

describe('Finder End2End', function () {
    it('should search correctly', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Age')
    })

    describe('Tutorialspoint Test', function () {
        it('Test Case3', function () {
            cy.visit('http://localhost:3000');
            cy.get('button[name="addButton"]').click();
            cy.on('window:confirm', (text) => {
                expect(text).to.contains('You are submitting information to an external page.');
            })
        });
    });
    

describe('Test validation of form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('button[name="addButton"]').click();
        cy.get('input[name="fname"]').type('Ola')
        cy.get('input[name="lname"]').type('Nordmann')
        cy.get('input[name="age"]').type('45')
        cy.get('select').select('Kalvskinnet') 
        cy.get('input[name="bio"]').type('Heia Norge')
        cy.get('button[name="submit-form-btn"]').click();
        cy.get('.submit-form-btn').submit()
    })

    it('displays form validation', () => {
        cy.get('input[name="fname"]').clear()
        cy.get('form').submit()
        cy.get('input[name="fname"]').should('contain')
    })

})

    const query = `{
        persons(first_name, last_name)
        {
            first_name
            last_name
        }
    }`;

    describe('Test that database was updated with the written review', function () {
        it('Access the DB directly and searches the person table for the added person', function () {
            cy.request(
                {
                    url: 'http://localhost:4000/',  // graphql endpoint
                    body: { query },  // or { query: query } depending if you are writing with es6
                    failOnStatusCode: false  // not a must but in case the fail code is not 200 / 400
                }
            ).then((res) => {
                cy.contains("Ola Nordmann")
            })
        })
    })
})