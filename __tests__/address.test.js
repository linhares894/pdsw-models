const { Client } = require('../lib/models')
const { Address } = require('../lib/models')
const db = require('../lib/models/index')


describe('Client tests', () => {
  beforeEach(async () => {
  })
  afterEach(async () => {
  })
  
  test('create address test', async () => {
    try {   
      let address = await Address.create({
        country: 'Brasil',
        state: 'SP',
        city: 'Sao Paulo',
        number: '222',
        street: 'Av Jaguare',
        lat: '-22.00000',
        lng: '-23.00000',
        landmark: 'casa',
        zip_code: '04909-200',
        clientId: 1,
      })

      address = await Address.create({
        country: 'Brasil',
        state: 'SP',
        city: 'Sao Paulo',
        number: '222',
        street: 'Av Jaguare',
        lat: '-22.00000',
        lng: '-23.00000',
        landmark: 'casa',
        zip_code: '04909-200',
        clientId: 1,
      })

      let clients = await Client.findAll({
        include: [{
          model: Address,
          where: { clientId: 1 }
        }]
      })
      expect(clients[0].get().email).toBe('123')
    } catch (err) {
      console.log(err)
    }
  })

  test('Add current address to client', async () => {
    try {
      let client = (await Client.findAll({ where: { id: 1 }}))[0]
      await client.update({current_address: 1})
      client = (await Client.findAll({ where: { id: 1 }}))[0]
      expect(client.get().current_address).toBe(1)
    } catch (err) {
      console.log(err)
    }
  })
})
