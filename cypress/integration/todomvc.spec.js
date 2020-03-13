/// <reference types="cypress" />

it('should navigate tot the TodoMVC app', () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh/thisdoesnotexist');
});
