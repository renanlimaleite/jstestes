export const Cart = () => {
  const items = []

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }

  const add = (item) => {
    items.push(item)
  }

  const remove = (product) => {}

  const summary = () => {}

  const checkout = () => {}

  return {
    items,
    getTotal,
    add,
    remove,
    summary,
    checkout
  }
}

const cart = Cart()

const product = {
  title: '',
  price: ''
}

const item = {
  quantity: 2,
  product
}

cart.add(item)
cart.remove(product)
cart.getTotal()
cart.summary()
cart.checkout()
