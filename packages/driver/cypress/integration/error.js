it('contains string zero', () => {
  cy.visit('/fixtures/index.html')
  cy.get('#zero').contains('0')
})

it('contains number zero', () => {
  cy.visit('/fixtures/index.html')
  cy.get('#zero').contains(0)
  cy.contains(/^b\w+/)
  cy.contains('ul', 'apples')
})
