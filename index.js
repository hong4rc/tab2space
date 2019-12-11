const mapRegex = {};

const getOptions = (length) => {
  if (!Object.prototype.hasOwnProperty.call(mapRegex, length)) {
    const mapLength = [' '];
    for (let i = length - 1; i > 0; --i) {
      mapLength.unshift(` ${mapLength[0]}`);
    }
    mapRegex[length] = {
      regex: new RegExp(`([^\t\n\r]{0,${length - 1}})\t|([^\t\n\r]{${length}})`, 'g'),
      func: (a, b) => (b !== undefined ? b + mapLength[b.length] : a),
    };
  }
  return mapRegex[length];
};

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
  const opts = getOptions(length);
  return str.replace(opts.regex, opts.func);
};
