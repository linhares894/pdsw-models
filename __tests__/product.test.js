const { Product } = require('../lib/models')
const db = require('../lib/models/index')

describe('Product tests', () => {
  beforeEach(async () => {
  })
  afterEach(async () => {
    // await db.sequelize.connectionManager.close()
  })
  test('create product test', async () => {
    let product = await Product.create({
      cod: '123',
      price: 2200,
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

    product = await product.update({
      cod: '456'
    })
    product = (await Product.findAll({ where: { id: 1 }}))[0]
    expect(product.author).toBe('someone')
  })

  test('update product test', async () => {
    product = (await Product.findAll({ where: { id: 1 }}))[0]
    product = await product.update({
      cod: '456'
    })
    expect(product.cod).toBe('456')
  })



  // test('invalid create product test', async () => {
  //   await Product.create({
  //     cod: '123',
  //     title: 'something',
  //     description: 'something',
  //     publisher: 'someone',
  //     edition: '1',
  //     isbn: '20033',
  //     weight: '120',
  //     pages: '40'
  //   }).catch(err => {
  //     expect(err).toBe() throw [SequelizeUniqueConstraintError: Validation error]
  //   })

  // })
})
