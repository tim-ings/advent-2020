import { part2 } from './part2';

describe('day1 part2', () => {
  it('should solve the example', () => {
    const input = `
      1721
      979
      366
      299
      675
      1456
    `;
    expect(part2(input)).toBe(241861950);
  });
});
