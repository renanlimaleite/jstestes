export const Cart = () => {
  let items = []

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }

  const add = (item) => {
    const find = items.find(p => p.product.title === item.product.title)
    if (!find) {   
      items = [...items, item]
    }
  }

  const remove = (productArg) => {
    items = items.filter(prd => prd.product.title !== productArg.title)
  }

  const summary = () => {}

  const checkout = () => {
    return {
      total: getTotal(),
      items
    }
  }

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
