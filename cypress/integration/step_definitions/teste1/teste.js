import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

// CASO-1
Given("O usuário acessa o site especificado", () => {
  cy.visit("https://pomodoro-inverso.vercel.app/");
});
When("ele clica no botão Começar", () => {
  cy.get('span').contains('Começar').click(); // Adicionando um clique no botão
});
Then("o cronômetro começa a contar", () => {
  cy.get('#timer').click().then((timer) => {
    if(timer !== '25:00') {
      cy.get('#timer').should('not.eq', '25:00');
    }
  })
});