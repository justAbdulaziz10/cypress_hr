it.only('visit and login' , function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(500);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin', { delay: 100 });
    cy.wait(500);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123', { delay: 100 });
    cy.wait(500);
    cy.get('.oxd-button').click();
    cy.wait(500);
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
    cy.wait(500);
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click();
    cy.wait(500);
    cy.get('.oxd-button').click();
    cy.wait(500);
    cy.get(':nth-child(2) > .oxd-input').type('new Admin', { delay: 100 });
    cy.wait(500);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('new Admin des', { delay: 100 });
    cy.wait(500);
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('new note', { delay: 100 });
    cy.wait(500);
    cy.get('[type="file"]').selectFile('cypress/fixtures/sampleCV.docx', { force: true });
    cy.wait(500);





});