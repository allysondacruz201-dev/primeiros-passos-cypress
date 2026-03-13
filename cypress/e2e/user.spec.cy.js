import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
   usernameField: '[name="username"]',
   passwordField: '[name="password"]',
   loginButton: "[type='submit']",
   sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
   dashboardGrid: ".orangehrm-dashboard-grid",
   wrongCredetialAlert: "[role='alert']",
   myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
   firstNameField: '[name="firstName"]',
   lastNameField: '[name="lastName"]',
   genericField: '.oxd-input--active',
   dateField: "[placeholder='yyyy-dd-mm']",
   dateCloseButton: ".--close",
   submitButton: "[type='submit']" 
}

 it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Firstname")
    cy.get(selectorsList.lastNameField).clear().type("Lastname")
    //cy.get(selectorsList.genericField).eq(3).clear().type("TestN1ckname")
    cy.get(selectorsList.genericField).eq(3).clear().type("mployTest")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdeTest")
    cy.get(selectorsList.genericField).eq(5).clear().type("DriverLicenseTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("2026-08-03")
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericField).eq(7).clear().type("ssnNumberTest")
    //cy.get(selectorsList.genericField).eq(9).clear().type("sinNumberTest")
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
})
 it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredetialAlert)
 })
})