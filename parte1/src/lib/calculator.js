export function sum(num1, num2) {
  num1 = Number(num1)
  num2 = Number(num2)

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error('You should be pass all parameters and they are numbers.')
  }
  
  return num1 + num2
}