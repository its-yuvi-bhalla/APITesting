/**
* @description
* The patchUpdateUserApiRequest command is used to update a user through Api
*
* @parameters
* @param {required} bearerToken
*
* @example
* cy.patchUpdateUserApiRequest (userDetails)
*/

Cypress.Commands.add('patchUpdateUserApiRequest', (UserDetails)=>{
    Cypress.log({
      name : 'patchUpdateUserApiRequest'
    })

cy.request({
    method:'PATCH',
    headers: {
        "x-api-key":`${Cypress.env('apiKey')}`
    },
    url:`${Cypress.env('baseUrl')}/api/users/${UserDetails.userID}`,
    body:{
    name: UserDetails.name,
    job: UserDetails.job
}
}).then((res)=>{
    console.log(`Response of patchUpdateUserApiRequest`,res)
    expect(res.status).to.eq(200)
    return res.body
})
})
