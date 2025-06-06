/**
 * 
 * @description 
 * this spec file contains test to verify that user info is get through api
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
let userID = 4 // using a hardcode ID because API Does not allow registration or creation of new users
describe('Verify that user can login with valid credentials', () => {

const userData = Cypress.env('user')
const userCredentials = {
    email:userData.email,
    password:userData.password,
    name:userData.name 
}  
const token = Cypress.env('token')

beforeEach('log in with valid credentials', ()=>{
    cy.postUserLoginApiRequest(userCredentials).then(($response)=>{
        expect($response.token).to.eq(token)
    }) 
})

it('get user',()=>{
    cy.getUserApiRequest(userID).then(($response)=>{
        expect($response.data.id).to.eq(userID)
        expect($response.data.email).to.eq(userCredentials.email)
        expect($response.data.first_name).to.eq(userCredentials.name.first_name)
        expect($response.data.last_name).to.eq(userCredentials.name.last_name)
    })
})

})