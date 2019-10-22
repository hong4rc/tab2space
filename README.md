# tab2space

> Change tab to space without change width of line

## Install
```bash
$ npm i tab2space
```

## Usage

```js
const tab2space = require('tab2space');
tab2space('This\tis\ttab', 4);
//=> 'This    is  tab'

tab2space('This\tis\ttab', 5);
//=> 'This is   tab'
```

## API

### tab2space(str: string, [length: number])

#### `str`
#### `length` is a Integer >= 1
