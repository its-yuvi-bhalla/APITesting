/**
* @description
* The getUserApiRequest command is used to get a user through Api
*
* @parameters
* @param {required} bearerToken
*
* @example
* cy.getUserApiRequest (UserID)
*/

Cypress.Commands.add('getUserApiRequest', (UserID)=>{
    Cypress.log({
      name : 'getUserApiRequest'
    })

cy.request({
    method:'GET',
    headers: {
        "x-api-key":`${Cypress.env('apiKey')}`
    },
    url:`${Cypress.env('baseUrl')}/api/users/${UserID}`,
}).then((res)=>{
    console.log(`Response of getUserApiRequest`,res)
    expect(res.status).to.eq(200)
    return res.body
})
})
