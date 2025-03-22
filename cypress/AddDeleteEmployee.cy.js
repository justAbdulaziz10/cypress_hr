it.only('visit and login' , function(){
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(500);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin', { delay: 100 });
cy.wait(500);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123', { delay: 100 });
cy.wait(500);
cy.get('.oxd-button').click();
cy.wait(500);
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
cy.wait(500);
cy.get('.orangehrm-header-container > .oxd-button').click();
cy.wait(500);
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(500);
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(500);
cy.get('.oxd-autocomplete-text-input > input').type('a', { delay: 100 });
cy.wait(500);
cy.get('.oxd-autocomplete-dropdown > :nth-child(2)').click();
cy.wait(500);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(500);
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(500);
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('mohammed', { delay: 100 });
cy.wait(500);
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('a1234567', { delay: 100 });
cy.wait(500);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('a1234567', { delay: 100 });
cy.wait(500);
cy.get('.oxd-button--secondary').click();
cy.wait(500);
cy.get('.oxd-table-body').should('contain', 'mohammed').then(() => cy.log('Job title verified'));
cy.wait(4000);
cy.contains('.oxd-table-row', 'mohammed').scrollIntoView({ duration: 500 }).should('exist').within(() => {
cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon').click({ force: true });
cy.get(':nth-child(1) > .oxd-icon').should('be.visible').click({ force: true, multiple: true });
});
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();
cy.wait(500);



});
// npx cypress open