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
let userID
describe('Verify that user can login with valid credentials', () => {

const userData = Cypress.env('user')
const userCredentials = {
    email:userData.email,
    password:userData.password
}  
const userDetails = {
    email:'eve.holt@reqres.in',
    password:userData.password
}  
const token = Cypress.env('token')

beforeEach('log in with valid credentials', ()=>{
    cy.postUserLoginApiRequest(userCredentials).then(($response)=>{
        expect($response.token).to.eq(token)
    })
})

it('Create a new user',()=>{
    cy.postCreateUsersApiRequest(userDetails).then(($response)=>{
        expect($response.token).to.eq(token)
        expect($response.id).to.exist
        userID = $response.id
    })

})

afterEach('Deleting User',()=>{
    cy.deleteUserApiRequest(userID)
})
})