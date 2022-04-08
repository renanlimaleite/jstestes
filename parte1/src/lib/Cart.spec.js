import { Cart } from './Cart'

describe('Cart', () => {
  let cart

  beforeEach(() => {
    cart = Cart()
  })

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0)
  });

  it('shoud multiply quantity and price receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes - man',
        price: 23488 // 234.88 | R$ 234,88
      },
      quantity: 2, // 46976
    }

    cart.add(item)

    expect(cart.getTotal()).toEqual(46976)
  });
});