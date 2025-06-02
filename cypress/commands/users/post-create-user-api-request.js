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
    url:`${Cypress.env('baseUrl')}/api/users`,
    body:{
        name:userDetails.name,
        job:userDetails.job
    }
}).then((res)=>{
    console.log(`Response of postCreateUsersApiRequest`,res)
    expect(res.status).to.eq(201)
    return res.body
})
})
