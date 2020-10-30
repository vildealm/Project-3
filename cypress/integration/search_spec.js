// npm cypress open, for å åpne testen
// npm cypress run for å kjøre testen


// Tester search prosessen

describe('Testing the search bar', function() {
    it('Finds the search bar and searches for persons name. Checks if result is correct.', function() {
      cy.visit('http://localhost:3000')
      cy.get('.search-field')
      .type('Ola Nordmann')
      .should('have.value', 'Ola Nordmann')
      cy.get('form').contains("Search").click()
      assert(cy.get('.person').contains('Ola Nordmann'))
    })
  })
 