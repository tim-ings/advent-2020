import { readInput } from '../read';

const twoSum = (inputs: number[], goal: number): [number, number] => {
  inputs.sort();
  for (let head = 0; head < inputs.length; head++) {
    for (let tail = inputs.length - 1; tail >= 0; tail--) {
      if (inputs[head] + inputs[tail] === goal) return [inputs[head], inputs[tail]];
    }
  }
  throw Error(`There are no two numbers in the inputs that add to ${goal}`);
}

const parse = (input: string): number[] => input.split('\n').map(x => x.trim()).filter(x => x !== '').map(Number);

export const part1 = (input: string): number => {
  const [a, b] = twoSum(parse(input), 2020);
  return a * b;
};

const main = async () => {
  const input = await readInput();
  console.log(part1(input));
};

main();
