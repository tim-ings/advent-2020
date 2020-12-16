import { readInput } from '../read';

const parse = (input: string): string[] => input
  .split('\n')
  .map(line => line.trim())
  .filter(line => line !== '');

const extend = (tobogganMap: string[], minWidth: number): string[] => tobogganMap
  .map(line => line
    .repeat(Math.floor(minWidth / tobogganMap[0].length))
  );

export const solve = (rawInput: string, right: number, down: number): number => {
  const input = parse(rawInput);
  const height = input.length;
  const steps = height / down;
  const width = right * steps;
  const tobogganMap = extend(input, width)
    .map(line => line
      .split('')
      .map(char => char === '#')
    );

  let collisions = 0;
  let x = 0;
  let y = 0;
  while (y < height) {
    if (tobogganMap[y][x]) {
      collisions += 1;
    }
    x += right;
    y += down;
  }

  return collisions;
}

const main = async () => {
  const input = await readInput();
  console.log(solve(input, 3, 1));
};

main();
