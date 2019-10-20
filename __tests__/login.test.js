const db = require('../lib/database/index')
const Client = require('../lib/models/Client')
const bcrypt = require('bcrypt');

describe('Client tests', () => {
  beforeEach(async () => {
  })
  afterEach(async () => {
  })
  
  test('create client test', async () => {

    try {
      let client = (await Client.create({
        email: 'new@gmail.com',
        password: '111',
        name: 'something',
        gender: 'something',
        cpf: '01234567890',
        rg: '44-333-999-3'
      }))
      client = (await Client.findAll({
        where: { email: 'new@gmail.com'}
      }))[0]
      expect(await bcrypt.compareSync('111', client.password)).toBeTruthy()
    } catch (err) {
      console.log(err)
      throw err
    }
  })

})
