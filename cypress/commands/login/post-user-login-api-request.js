/**
* @description
* The postUserLoginApiRequest command is used to login through Api
*
* @parameters
* @param {required} bearerToken
*
* @example
* cy.postUserLoginApiRequest(userDetails)
*/

Cypress.Commands.add('postUserLoginApiRequest', (userDetails)=>{
    Cypress.log({
      name : 'postUserLoginApiRequest'
    })

cy.request({
    method:'POST',
    headers: {
        "x-api-key":`${Cypress.env('apiKey')}`
    },
    url:`${Cypress.env('baseUrl')}/api/login`,
    body:{
        email:userDetails.email,
        password:userDetails.password
    }
}).then((res)=>{
    console.log(`Response of postUserLoginApiRequest`,res)
    expect(res.status).to.eq(200)
    return res.body
})
})
