const Client = require('../lib/models/Client')
const Address = require('../lib/models/Address')
const db = require('../lib/database/index')


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
        include: { association: 'addresses'}
      })
      expect(clients[0].get().email).toBe('123')
    } catch (err) {
      console.log(err)
    }
  })

  test('Add current address to client', async () => {
    try {
      let client = (await Client.findAll({
        include: { association: 'addresses'},
        where: { id: 1 }
      }))[0]
      await client.update({currentAddress: 1})
      client = (await Client.findAll({
        include: { association: 'addresses'},
        where: { id: 1 }
      }))[0]
      expect(client.get().currentAddress).toBe(1)
    } catch (err) {
      console.log(err)
    }
  })
})
