import { readInput } from '../read';

const threeSum = (inputs: number[], goal: number): [number, number, number] => {
  inputs.sort();
  for (let i = 0; i < inputs.length; i++) {
    for (let j = i; j < inputs.length; j++) {
      for (let k = j; k < inputs.length; k++) {
        if (inputs[i] + inputs[j] + inputs[k] === goal) return [inputs[i], inputs[j], inputs[k]];
      }
    }
  }
  throw Error(`There are no three numbers in the inputs that add to ${goal}`);
}

const parse = (input: string): number[] => input.split('\n').map(x => x.trim()).filter(x => x !== '').map(Number);

export const part2 = (input: string): number => {
  const [a, b, c] = threeSum(parse(input), 2020);
  return a * b * c;
};

const main = async () => {
  const input = await readInput();
  console.log(part2(input));
};

main();
