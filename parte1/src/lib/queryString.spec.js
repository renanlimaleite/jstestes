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
});