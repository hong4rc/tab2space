module.exports = (str, length = 4) => {
  if (!Number.isInteger(length)) {
    throw new TypeError(`Expected length Integer, got ${length}`);
  }
  const type = typeof str;
  if (type !== 'string') {
    throw new TypeError(`Expected 'str' is string, got type: ${type}`);
  }
  if (length < 1) {
    throw new RangeError(`Expected length >= 1, got ${length}`);
  }

  const arr = str.split(/([\r\n]+)/);
  return arr
    .map((e) => {
      let dt = 0;
      return e.replace(/\t/g, (_, i) => {
        const j = length * Math.ceil((dt + i + 1) / length) - dt;
        dt += j - i - 1;
        return ' '.repeat(j - i);
      });
    })
    .join('');
};
