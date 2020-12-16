import { solve } from './part1';

describe('day1 part1', () => {
  it('should solve the example', () => {
    const input = `
      1721
      979
      366
      299
      675
      1456
    `;
    expect(solve(input)).toBe(514579);
  });
});
