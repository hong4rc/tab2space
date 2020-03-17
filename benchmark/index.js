const Benchmark = require('benchmark');

const origin = require('..');
const compare = require('../compare');

const suite = new Benchmark.Suite();

const allChar = '...................................\t\t\t\t\t\n\r'.split('');

const getChar = () => allChar[Math.floor(allChar.length * Math.random())];

const testData = [];
for (let i = 0; i < 20; ++i) {
  let s = '';
  for (let j = 0; j < 100; ++j) {
    s += getChar();
  }
  testData.push(s);
}

suite.add('origin', () => {
  testData.forEach((e) => {
    origin(e);
  });
})
  .add('compare', () => {
    testData.forEach((e) => {
      compare(e);
    });
  })
  // add listeners
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  // run async
  .run({ async: true });
