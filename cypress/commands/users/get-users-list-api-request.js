/**
* @description
* The getUsersListApiRequest command is used to get users list through Api
*
* @parameters
* @param {required} bearerToken
*
* @example
* cy.getUsersListApiRequest (UserID)
*/

Cypress.Commands.add('getUsersListApiRequest', (page)=>{
    Cypress.log({
      name : 'getUsersListApiRequest'
    })

cy.request({
    method:'GET',
    headers: {
        "x-api-key":`${Cypress.env('apiKey')}`
    },
    url:`${Cypress.env('baseUrl')}/api/users?page=${page}`,
}).then((res)=>{
    console.log(`Response of getUsersListApiRequest`,res)
    expect(res.status).to.eq(200)
    return res.body
})
})
