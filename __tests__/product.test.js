const { Product } = require('../lib/models')

describe('Product tests', () => {
  test('create product test', async () => {
    const product = await Product.create({
      cod: '123',
      title: 'something',
      description: 'something',
      author: 'someone',
      publisher: 'someone',
      edition: '1',
      isbn: '20033',
      weight: '120',
      pages: '40'
    })

    expect(product.author).toBe('someone')
  })

  test('invalid create product test', async () => {
    await Product.create({
      cod: '123',
      title: 'something',
      description: 'something',
      publisher: 'someone',
      edition: '1',
      isbn: '20033',
      weight: '120',
      pages: '40'
    }).catch(err => {
      // expect(err).toBe() throw [SequelizeUniqueConstraintError: Validation error]
    })

  })
})