import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage()
const dashboard = new dashboardPage()


   describe('Login Orange HRM Tests', () => {
     
 it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid
    
})

 it('Login - Success', () => {
   loginPage.acessLoginPage()
   loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

   dashboard.checkDashboardPage()
   
 })

})
