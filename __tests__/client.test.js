const db = require('../lib/database/index')
const Client = require('../lib/models/Client')

describe('Client tests', () => {
  test('create client test', async () => {

    try {
      let client = (await Client.create({
        email: '123',
        password: '111',
        name: 'something',
        gender: 'something',
        cpf: '01234567890',
        rg: '44-333-999-3'
      }))
      expect(client.get().email).toBe('123')
    } catch (err) {
      console.log(err)
      throw err
    }
  })

  test('create client test', async () => {
    try {
      let client = (await Client.create({
        email: '1234',
        password: '111',
        name: 'something',
        gender: 'something',
        cpf: '01234567890',
        rg: '44-333-999-3'
      }))
      expect(client.get().email).toBe('1234')
    } catch (err) {
      console.log(err)
      throw err
    }
  })
})
