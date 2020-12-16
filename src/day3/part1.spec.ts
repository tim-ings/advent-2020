import { solve } from './part1';

describe('day3 part1', () => {
  it('should solve the example', () => {
    const input = `
      ..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#
    `;
    expect(solve(input, 3, 1)).toBe(7);
  });
});
