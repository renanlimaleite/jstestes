import { queryString } from "./queryString";

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Renan',
      profession: 'developer'
    }

    expect(queryString(obj)).toBe(
      'name=Renan&profession=developer'
    )
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Renan',
      profession: 'developer',
      skills: ['JS', 'TS', 'REACT']
    }

    expect(queryString(obj)).toBe(
      'name=Renan&profession=developer&skills=JS,TS,REACT'
    )
  })

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Renan',
      profession: 'developer',
      skills: {
        first: 'JS',
        second: 'TDD'
      }
    }

    expect(() => {
      queryString(obj)
    }).toThrowError()
  })
});