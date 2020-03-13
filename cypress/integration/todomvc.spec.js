/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh');

  cy.get('.old-todo').type('clean room{enter}');
});
