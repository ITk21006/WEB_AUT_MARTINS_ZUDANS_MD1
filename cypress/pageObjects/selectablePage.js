// cypress/pageObjects/selectablePage.js

class SelectablePage {
    visit() {
      cy.visit('https://demoqa.com/selectable');
    }
  
    get gridTab() {
      return cy.get('#demo-tab-grid');
    }
  
    get gridItemsContainer() {
      return cy.get('#listContainer');
    }
  
    get buttonTwo() {
      return cy.get('#row1 > :nth-child(2)');
    }
  
    get buttonFour() {
      return cy.get('#row2 > :nth-child(1)');
    }
  
    get buttonSix() {
      return cy.get('#row2 > :nth-child(3)');
    }
  
    get buttonEight() {
      return cy.get('#row3 > :nth-child(2)');
    }
  
    clickGrid() {
      this.gridTab.click();
      this.gridItemsContainer.should('be.visible'); // Wait for the container to be visible
    }
  
    clickItems(items) {
      items.forEach(item => {
        item.click();
      });
    }
  
    validateItemsHighlighted(items) {
      items.forEach(item => {
        item.should('have.class', 'active');
      });
    }
  
    validateItemsNotHighlighted(items) {
      items.forEach(item => {
        item.should('not.have.class', 'active');
      });
    }
  }
  
  export default SelectablePage;
  