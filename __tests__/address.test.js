const db = require('../lib/database/index')
const Client = require('../lib/models/Client')
const Address = require('../lib/models/Address')

describe('Address tests', () => { 
  test('create address test', async () => {
    try {   
      let client = (await Client.create({
        email: 'azul@gmail.com',
        password: '111',
        name: 'something',
        gender: 'something',
        cpf: '01234567890',
        rg: '44-333-999-3'
      }))
      expect(client.get().email).toBe('azul@gmail.com')
      
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
        clientId: client.id,
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
        clientId: client.id,
      })

      let clients = await Client.findAll({
        include: { association: 'addresses'},
        where: {id: client.id}
      })
      expect(clients[0].get().addresses.length).toBe(2)
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
      client = await client.update({currentAddress: 1})
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
