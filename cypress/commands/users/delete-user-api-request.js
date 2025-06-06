/**
* @description
* The deleteUserApiRequest command is used to delete a user through Api
*
* @parameters
* @param {required} bearerToken
*
* @example
* cy.deleteUserApiRequest (userDetails)
*/

Cypress.Commands.add('deleteUserApiRequest', (UserID)=>{
    Cypress.log({
      name : 'deleteUserApiRequest'
    })

cy.request({
    method:'DELETE',
    headers: {
        "x-api-key":`${Cypress.env('apiKey')}`
    },
    url:`${Cypress.env('baseUrl')}/api/users/${UserID}`,
}).then((res)=>{
    console.log(`Response of deleteUserApiRequest`,res)
    expect(res.status).to.eq(204)
    return res.body
})
})
