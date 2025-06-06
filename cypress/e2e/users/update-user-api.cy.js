/**
 * 
 * @description 
 * this spec file contains test to verify that user can be updated through api
 * 
 * @file 
 * cypress\e2e\users\update-user-api.cy.js
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
 * - User is edited and present in Database
 */
let userID
describe('Verify that user can login with valid credentials', () => {

const userData = Cypress.env('user')
const userCredentials = {
    email:userData.email,
    password:userData.password
}  
const userDetails = {
    name:`qa-auto-user-name${Cypress.dayjs().format('ssmmHHYY')}`,
    job:`qa-auto-job${Cypress.dayjs().format('ssmmHHYY')}`
}
const updatedUserDetails = {
    name:`qa-auto-updated-user-name${Cypress.dayjs().format('ssmmHHYY')}`,
    job:`qa-auto-updated-job${Cypress.dayjs().format('ssmmHHYY')}`
} 
const token = Cypress.env('token')

beforeEach('log in with valid credentials', ()=>{
    cy.postUserLoginApiRequest(userCredentials).then(($response)=>{
        expect($response.token).to.eq(token)
    })
    cy.postCreateUsersApiRequest(userDetails).then(($response)=>{
        expect($response.name).to.eq(userDetails.name)
        expect($response.job).to.eq(userDetails.job)
        expect($response.id).to.exist
        updatedUserDetails.userID = $response.id
    }) 
})

it('Update a new user',()=>{
    cy.patchUpdateUserApiRequest(updatedUserDetails).then(($response)=>{
        expect($response.name).to.eq(updatedUserDetails.name)
        expect($response.job).to.eq(updatedUserDetails.job)
    })
})

afterEach('Deleting User',()=>{
    cy.deleteUserApiRequest(updatedUserDetails.userID)
})
})