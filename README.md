# tab2space
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FHongarc%2Ftab2space.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FHongarc%2Ftab2space?ref=badge_shield)


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

### tab2space(str: string, [options])

#### `str`
#### options

Type: `object`

##### length

Type: `integer`
Default: `4`

Length indent for tab

##### replacement

Type: `string`
Default: `4`

Replace for tab


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FHongarc%2Ftab2space.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FHongarc%2Ftab2space?ref=badge_large)