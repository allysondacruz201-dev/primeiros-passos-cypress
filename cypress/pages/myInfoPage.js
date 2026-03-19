class myInfoPage {

     selectorsList() {
        const selectors = {
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

return selectors

}

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
}

      fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
    }

         saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }

}

export default myInfoPage 