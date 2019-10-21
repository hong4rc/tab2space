const tab2space = require('.');

test('error', () => {
  expect(() => tab2space({})).toThrow(TypeError);
  expect(() => tab2space('a', 1.1)).toThrow(TypeError);
  expect(() => tab2space('a', -5)).toThrow(RangeError);
});

test('No tab', () => {
  [
    '',
    '             ',
    'This is no tab line.',
    'This  is   no  tab  line  .',
  ].forEach((str) => {
    expect(tab2space(str)).toEqual(str);
  });
});

test('tab#first', () => {
  expect(tab2space('\t\t\t', 3)).toEqual('         ');
  expect(tab2space('\ttab first', 2)).toEqual('  tab first');
  expect(tab2space('\ttab first', 4)).toEqual('    tab first');
  expect(tab2space('\t tab first', 4)).toEqual('     tab first');
  expect(tab2space('\t\ttab first', 4)).toEqual('        tab first');
});
test('tab#end', () => {
  expect(tab2space('1\t', 4)).toEqual('1   ');
  expect(tab2space('12\t', 4)).toEqual('12  ');
  expect(tab2space('123\t', 4)).toEqual('123 ');
  expect(tab2space('1234\t', 4)).toEqual('1234    ');
  expect(tab2space('1234\t\t', 4)).toEqual('1234        ');
});

test('tab#mixed', () => {
  expect(tab2space('1234\ta\t', 4)).toEqual('1234    a   ');
  expect(tab2space('1234\ta\tb', 4)).toEqual('1234    a   b');
  expect(tab2space('1234\ta\tb', 5)).toEqual('1234 a    b');
});

test('multi-line', () => {
  expect(tab2space('123\ta\na\tb', 4)).toEqual('123 a\na   b');
  expect(tab2space('1234\ta\na\tb', 4)).toEqual('1234    a\na   b');
  expect(tab2space('1234\ta\r\n\ra\tb', 4)).toEqual('1234    a\r\n\ra   b');
});
