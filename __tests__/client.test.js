const { Client } = require('../lib/models')
const { Address } = require('../lib/models')
const db = require('../lib/models/index')


describe('Client tests', () => {
  beforeEach(async () => {
  })
  afterEach(async () => {
    await db.sequelize.connectionManager.close()
  })
  
  test('create client test', async () => {
    // console.log(Sequelize)
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

      
      // let address = await Address.create({
      //   country: 'Brasil',
      //   state: 'SP',
      //   city: 'Sao Paulo',
      //   number: '222',
      //   street: 'Av Jaguare',
      //   lat: '-22.00000',
      //   lng: '-23.00000',
      //   landmark: 'casa',
      //   zip_code: '04909-200',
      //   clientId: client.id,
      // })

      // address = await Address.create({
      //   country: 'Brasil',
      //   state: 'SP',
      //   city: 'Sao Paulo',
      //   number: '222',
      //   street: 'Av Jaguare',
      //   lat: '-22.00000',
      //   lng: '-23.00000',
      //   landmark: 'casa',
      //   zip_code: '04909-200',
      //   clientId: 1,
      // })

      // client = await Client.findAll({
      //   include: [{
      //     model: Address,
      //     where: { clientId: client.id }
      //   }]
      // })
      // expect(client[0].get().email).toBe('123')
    } catch (err) {
      console.log(err)
      throw err
    }



  })

  // test('Add current address to client', async () => {
  //   try {
  //     let client = await Client.findAll({
  //       include: [{
  //         model: Address, as: 'current_address',
  //         where: { clientId: '1' }
  //       }]
  //     })
  //     console.log(client[0])
  //     expect(client[0].get().email).toBe('123')
  //   } catch (err) {
  //     console.log(err)
  //     throw err
  //   }
  // })
})
