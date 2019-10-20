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
      // const client = (await Client.findAll({
      //   where: { email: 'azul@gmail.com'}
      // }))[0]
      // expect(await bcrypt.compareSync('111', client.password)).toBeTruthy()
    } catch (err) {
      console.log(err)
      throw err
    }
  })

})
