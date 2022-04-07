import { queryString, parse } from "./queryString";

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

describe('Query string to an object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=renan&profession=developer'

    expect(parse(qs)).toEqual({
      name: 'renan',
      profession: 'developer'
    })
  })

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=renan'
    
    expect(parse(qs)).toEqual({
      name: 'renan'      
    })
  })

  it('should convert a query string to an object taking care of comma separed values', () => {
    const qs = 'name=renan&skills=JS,TDD'

    expect(parse(qs)).toEqual({
      name: 'renan',
      skills: ['JS', 'TDD']
    })
  })
});