import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('that the user is on the Google home page', () => {
  //cy.visit('https://www.google.com');
});

When('the user types "shoe" in the search bar', () => {
  cy.get('input[name="q"]').type('sapato');
});

When('click on the search button', () => {
  cy.get('input[name="q"]').type('{enter}');
});

Then('the search results should be displayed', () => {
  cy.get('#search').should('be.visible');
});

Then('the results list should contain links related to shoes', () => {
  cy.get('#search').within(() => {
    cy.contains('sapato').should('exist');
  });
});