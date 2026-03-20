import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const dashboard = new dashboardPage()
const menu = new menuPage()
const myInfo = new myInfoPage()

   describe('Orange HRM Tests', () => {
     
 it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboard.checkDashboardPage()

    menu.accessMyInfo()

    myInfo.fillPersonalDetails(chance.first(), chance.last())
    myInfo.fillEmployeeDetails("mPloyeId", "OtherId", "DriverLicenseTest", "2026-08-03")
    myInfo.fillStatus()
    myInfo.saveForm()


  
})

})
