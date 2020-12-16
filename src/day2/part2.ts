import { readInput } from '../read';

interface Policy {
  position1: number;
  position2: number;
  char: string;
  password: string;
}

const parseLine = (line: string): Policy => {
  const match = line.match(/(?<position1>\d+)-(?<position2>\d+) (?<char>[a-z,A-Z]): (?<password>.+)/);
  if (!match?.groups) throw Error(`Bad input ${line}`);
  const { groups: { position1, position2, char, password } } = match;
  return { position1: Number(position1), position2: Number(position2), char, password };
};
const parse = (input: string): Policy[] => input
  .split('\n')
  .map(x => x.trim())
  .filter(x => x !== '')
  .map(parseLine);

const isCharAt = (char: string, idx: number, password: string): boolean => password[idx - 1] === char;
const isValid = ({ position1, position2, char, password }: Policy): boolean => {
  const a = isCharAt(char, position1, password);
  const b = isCharAt(char, position2, password);
  return (a && !b) || (!a && b);
};
export const solve = (input: string): number => parse(input).reduce((validCount, policy) => isValid(policy) ? validCount + 1 : validCount, 0);

const main = async () => {
  const input = await readInput();
  console.log(solve(input));
};

main();
