/**
* @description
* The postCreateUsersApiRequest command is used to create a user through Api
*
* @parameters
* @param {required} bearerToken
*
* @example
* cy.postCreateUsersApiRequest(userDetails)
*/

Cypress.Commands.add('postCreateUsersApiRequest', (userDetails)=>{
    Cypress.log({
      name : 'postCreateUsersApiRequest'
    })

cy.request({
    method:'POST',
    headers: {
        "x-api-key":`${Cypress.env('apiKey')}`
    },
    url:`${Cypress.env('baseUrl')}/api/register`,
    body:{
        email:userDetails.email,
        password:userDetails.password
    }
}).then((res)=>{
    console.log(`Response of postCreateUsersApiRequest`,res)
    expect(res.status).to.eq(200)
    return res.body
})
})
