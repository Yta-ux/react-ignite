import cypress from "cypress"

describe('Testing Todo Platform', () => {
  it('Creating New Task', () => {
    cy.visit('http://localhost:3000')

    cy.get('#newTask').type('Uma nova tarefa')

    cy.contains('Criar').click()
  })

  it('Mark Task', () => {
    cy.get('.test-checkbox').click()
  })

  it('Delete Task', () => {
    cy.get('.test-btn-delete').click()
  })
})