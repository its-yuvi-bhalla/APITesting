/**
 * 
 * @description 
 * this spec file contains test to verify that user can login with correct credentials through api
 * 
 * @file 
 * cypress\e2e\login\user-login-with-valid-credentials-api.cy.js
 * 
 * @params
 * - Email
 * - Password
 * 
 * @prerequisites
 * - User should have a valid email and password pair
 * 
 * @assertions
 * - User Login is successful
 * - Auth Token is generated
 */

describe('Verify that user can login with valid credentials', () => {

const userData = Cypress.env('user')
const userDetails = {
    email:userData.email,
    password:userData.password
}  
const token = Cypress.env('token')

it('log in with valid credentials', ()=>{
    cy.postUserLoginApiRequest(userDetails).then(($response)=>{
        expect($response.token).to.eq(token)
    })
})
})