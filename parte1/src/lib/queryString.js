const keyValueToString = ([key, value]) => {
  const isObject = typeof value === 'object'
  const isNotArray = !Array.isArray(value)
  if (isObject && isNotArray) {
    throw new Error('Please check yout params')
  }
  return `${key}=${value}`
}

export const queryString = (obj) => 
  Object.entries(obj)
  .map(keyValueToString)
  .join('&')

export const parse = string => Object.fromEntries(string.split('&').map(item => {
  let [key, value] = item.split('=')
  if (value.includes(',')) {
    value = value.split(',')
  }  
  return [key, value]
}))
