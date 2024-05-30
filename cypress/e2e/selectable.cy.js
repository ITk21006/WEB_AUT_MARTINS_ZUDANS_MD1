// cypress/e2e/selectable.cy.js

import SelectablePage from '../pageObjects/selectablePage';

describe('Selectable Grid', () => {
  const selectablePage = new SelectablePage();

  it('should highlight selected items and ensure other items are not highlighted', () => {
    selectablePage.visit();

    // Step b: Click "Grid"
    selectablePage.clickGrid();

    // Step c: Click "Two", "Four", "Six", "Eight"
    const itemsToSelect = [
      selectablePage.buttonTwo,
      selectablePage.buttonFour,
      selectablePage.buttonSix,
      selectablePage.buttonEight
    ];
    selectablePage.clickItems(itemsToSelect);

    // Step d: Validate that "Two", "Four", "Six", "Eight" are highlighted
    selectablePage.validateItemsHighlighted(itemsToSelect);

    // Step e: Validate that "One", "Three", "Five", "Seven", "Nine" are not highlighted
    const itemsNotSelected = [
      cy.get('#row1 > :nth-child(1)'), // One
      cy.get('#row1 > :nth-child(3)'), // Three
      cy.get('#row2 > :nth-child(2)'), // Five
      cy.get('#row3 > :nth-child(1)'), // Seven
      cy.get('#row3 > :nth-child(3)')  // Nine
    ];
    selectablePage.validateItemsNotHighlighted(itemsNotSelected);
  });
});
