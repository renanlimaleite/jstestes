import { sum } from './calculator'

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4)  
});

it('should sum 2 and 2 even if one them is a string and the result must be 4', () => {
  expect(sum('2', 2)).toBe(4)  
});

it('should throw an error if what provider to the method cannot be summed', () => {
  expect(() => {
    sun('', 2)
  }).toThrowError()

  expect(() => {
    sum([2, 2])
  }).toThrowError()

  expect(() => {
    sum(1)
  }).toThrowError()

  expect(() => {
    sum()
  }).toThrowError()
});