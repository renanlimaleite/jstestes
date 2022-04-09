import { Cart } from './Cart'

describe('Cart', () => {
  let cart

  let product = {
    title: 'Adidas running shoes - men',
    price: 23488 // 234.88 | R$ 234,88
  }
  let product2 = {
    title: 'Adidas running shoes - women',
    price: 20000 // 234.88 | R$ 234,88
  }

  beforeEach(() => {
    cart = Cart()
  })

  describe('getTotal()', () => {
    
  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0)
  });

  it('should multiply quantity and price receive the total amount', () => {
    const item = {
      product,
      quantity: 2, // 46976
    }

    cart.add(item)

    expect(cart.getTotal()).toEqual(46976)
  });
  
  it('should ensure no more than on product exists at a time', () => {
    cart.add({
      product,
      quantity: 2
    })

    cart.add({
      product,
      quantity: 1
    })

    expect(cart.getTotal()).toEqual(46976)
  });

  it('should update total when a products get included and then removed', () => {
    cart.add({
      product,
      quantity: 2
    })

    cart.add({
      product: product2,
      quantity: 1
    })

    cart.remove(product)

    expect(cart.getTotal()).toEqual(20000)
  });
  });
  
  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 5
      })

      cart.add({
        product: product2,
        quantity: 3
      })

      // toMatchInlineSnapshot
      expect(cart.checkout()).toMatchSnapshot()
    });
  });
});