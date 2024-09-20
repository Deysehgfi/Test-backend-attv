test("Testar se seu programa consegue criar um novo usuário corretamente."), ()=>{
    expect().toEqual()
}

it('Deve encontrar o usuario pelo email', async ()=> {
    const user = await UserServices.findbyEmail(email) as UserInstance 
    const match = await UserServices.matchPassword('invalid', user.password)
    expect(match).toBEFalsy()

})