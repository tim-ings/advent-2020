import { createInterface } from 'readline';

export const readInput = async (): Promise<string> =>
  new Promise(resolve => {
    const lines: string[] = [];
    createInterface({ input: process.stdin, output: process.stdout, terminal: false })
      .on('line', line => lines.push(line))
      .on('pause', () => resolve(lines.join('\n')));
  });
