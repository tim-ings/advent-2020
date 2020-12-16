import { part1 } from './part1';

describe('day2 part1', () => {
  it('should solve the example', () => {
    const input = `
      1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc
    `;
    expect(part1(input)).toBe(2);
  });
});
