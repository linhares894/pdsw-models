const db = require('../lib/database/index')
const Client = require('../lib/models/Client')
const Address = require('../lib/models/Address')

describe('Client tests', () => {
  beforeEach(async () => {
  })
  afterEach(async () => {
  })
  
  test('create client test', async () => {

    try {
      let client = (await Client.create({
        email: '123',
        password: '111',
        name: 'something',
        gender: 'something',
        cpf: '01234567890',
        rg: '44-333-999-3',
        dob: '2019-10-19T14:07:52.537Z',
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
        email: '123',
        password: '111',
        name: 'something',
        gender: 'something',
        cpf: '01234567890',
        rg: '44-333-999-3',
        dob: '2019-10-19T14:07:52.537Z',
      }))
      expect(client.get().email).toBe('123')
    } catch (err) {
      console.log(err)
      throw err
    }
  })
})
