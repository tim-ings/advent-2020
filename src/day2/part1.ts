import { count } from 'yargs';
import { readInput } from '../read';

interface Policy {
  lower: number;
  upper: number;
  char: string;
  password: string;
}

const parseLine = (line: string): Policy => {
  const match = line.match(/(?<lower>\d+)-(?<upper>\d+) (?<char>[a-z,A-Z]): (?<password>.+)/);
  if (!match?.groups) throw Error(`Bad input ${line}`);
  const { groups: { lower, upper, char, password } } = match;
  return { lower: Number(lower), upper: Number(upper), char, password };
};
const parse = (input: string): Policy[] => input
  .split('\n')
  .map(x => x.trim())
  .filter(x => x !== '')
  .map(parseLine);

const countChar = (char: string, password: string): number => password.split('').filter(c => c === char).length;
const isValid = ({ lower, upper, char, password }: Policy): boolean => countChar(char, password) >= lower && countChar(char, password) <= upper;
export const part1 = (input: string): number => parse(input).reduce((validCount, policy) => isValid(policy) ? validCount + 1 : validCount, 0);

const main = async () => {
  const input = await readInput();
  console.log(part1(input));
};

main();
