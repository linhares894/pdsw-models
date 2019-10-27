const db = require('../lib/database/index')
const Client = require('../lib/models/Client')
const Sale = require('../lib/models/Sale')
const Product = require('../lib/models/Product')

describe('Sale tests', () => {
  test('create sale test', async () => {
    let product = await Product.create({
      cod: '1',
      price: 3333,
      availableQuantity: 20,
      title: 'something',
      description: 'something',
      author: 'someone',
      publisher: 'someone',
      edition: '1',
      isbn: '20033',
      weight: '120',
      pages: '40',
      genre: 'terror',
      language: 'pt'
    })

    let product1 = await Product.create({
      cod: '76764',
      price: 1111,
      availableQuantity: 20,
      title: 'something',
      description: 'something',
      author: 'someone',
      publisher: 'someone',
      edition: '1',
      isbn: '20033',
      weight: '120',
      pages: '40',
      genre: 'terror',
      language: 'pt'
    })

    try {
      let client = (await Client.create({
        email: 'aabbcc',
        name: 'linhares',
        password: '123',
        gender: 'm'
      }))

      const saleItems = [
        {
          productId: product.id,
          quantity: 5,
          price: 40,
        },
        {
          productId: product1.id,
          quantity: 5,
          price: 20,
        }
      ]

      let sale = {
        clientId: client.id,
        totalPrice: 2000,
        saleItems
      }

      sale = await Sale.save(sale)

      expect(sale.saleItems.length).toBe(2)
    } catch (err) {
      console.log(err)
      throw err
    }
  })

  test('Query client with sale', async () => {
    let res = (await Client.findAll({
      where: {email: 'aabbcc'},
      include: { 
        association: 'sales',
        include: { association: 'saleItems'},
      }
    }))[0]
    expect(res.sales[0].saleItems.length).toBe(2)
  })
})
