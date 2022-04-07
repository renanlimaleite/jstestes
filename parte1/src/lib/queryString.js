export const queryString = (obj) => 
  Object.entries(obj)
  .map(([key, value]) => {
    const isObject = typeof value === 'object'
    const isNotArray = !Array.isArray(value)
    if (isObject && isNotArray) {
      throw new Error('Please check yout params')
    }
    return `${key}=${value}`
  })
  .join('&')