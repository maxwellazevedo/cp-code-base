import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// CASO-1
Given("O usuário acessa o site especificado", () => {
  cy.visit("https://www.google.com");
});