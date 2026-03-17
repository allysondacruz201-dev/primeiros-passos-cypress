import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboard = new dashboardPage()
const menu = new menuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
   firstNameField: "[name='firstName']",
   lastNameField: '[name="lastName"]',
   genericField: '.oxd-input--active',
   dateField: "[placeholder='yyyy-dd-mm']",
   dateCloseButton: ".--close",
   submitButton: "[type='submit']",
   genericCombobox: ".oxd-select-text-input",
   secondItemCombobox: ":nth-child(27) > span",
   thirdItemCombobox: ".oxd-select-dropdown > :nth-child(4)",
}

 it.only('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboard.checkDashboardPage()

    menu.accessMyInfo()

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
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()


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