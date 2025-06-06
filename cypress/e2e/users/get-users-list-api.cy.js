/**
 * 
 * @description 
 * this spec file contains test to verify that user list is retrieved through api
 * 
 * @file 
 * cypress\e2e\users\get-user-api.cy.js
 * 
 * @params
 * - Email
 * - Password
 * 
 * @prerequisites
 * - User should have a valid credentials
 * 
 * @assertions
 * - User Login is successful
 * - User info is displayed
 */

describe('Verify that user can login with valid credentials', () => {

const userData = Cypress.env('user')
const userCredentials = {
    email:userData.email,
    password:userData.password,
    name:userData.name 
}  
const page = 1
const token = Cypress.env('token')

beforeEach('log in with valid credentials', ()=>{
    cy.postUserLoginApiRequest(userCredentials).then(($response)=>{
        expect($response.token).to.eq(token)
    }) 
})

it('get user',()=>{
    cy.getUsersListApiRequest(page).then(($response)=>{
          const names = $response.data.map(name => name.first_name)
        expect(names).to.contain(userCredentials.name.first_name)
         
    })
})

})