const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt');
const second = readFileSync('./content/second.txt');

writeFileSync(
  './content/result-sync.txt',
  `here is the result : ${first}, ${second}`,
  { flag: 'a' } //to append instead of overwriting in case it's run again
);
