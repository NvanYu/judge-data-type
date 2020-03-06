## judge-data-type

a module for judge data type

## Installation

```bash
$ npm install judge-data-type
```

## API

```js
let type = require("judge-data-type");
type.isNumber(1); // true
type.isBoolean(true); // true
type.isPlainObject(new Date()); // false
type.isSet(new Set()); // true
type.isSymbol(Symbol("123")); // true
```

## License

MIT
