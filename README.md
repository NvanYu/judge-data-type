## judge-data-type

a module for judge data type

## Installation

```bash
$ npm install judge-data-type
```

## Usage

```js
let type = require("judge-data-type");
type.isNumber(1); // true
type.isBoolean(true); // true
type.isPlainObject(new Date()); // false
type.isSet(new Set()); // true
type.isSymbol(Symbol("123")); // true
```

## API

The following are all api of this library:

| API              |                 Description                 |
| ---------------- | :-----------------------------------------: |
| isString(v)      |   Determines whether a value is a string    |
| isNumber(v)      |   Determines whether a value is a number    |
| isBoolean(v)     |   Determines whether a value is a boolean   |
| isTrue(v)        |     Determines whether a value is true      |
| isFalse(v)       |     Determines whether a value is false     |
| isUndefined(v)   |   Determines whether a value is undefined   |
| isNull(v)        |     Determines whether a value is null      |
| isPromise(v)     |   Determines whether a value is a promise   |
| isObject(v)      |   Determines whether a value is a object    |
| isPlainObject(v) | Determines whether a value is a plainObject |
| isFunction(v)    |  Determines whether a value is a function   |
| isDate(v)        |    Determines whether a value is a date     |
| isRegExp(v)      |   Determines whether a value is a regexp    |
| isLikeArray(v)   |  Determines whether a value is a likeArray  |
| isMap(v)         |     Determines whether a value is a map     |
| isWeakMap(v)     |   Determines whether a value is a weakMap   |
| isSet(v)         |     Determines whether a value is a set     |
| isWeakSet(v)     |   Determines whether a value is a weakSet   |
| isSymbol(v)      |   Determines whether a value is a symbol    |
| isBigInt(v)      |   Determines whether a value is a bigInt    |
| isElement(v)     | Determines whether a value is a dom element |

## License

MIT
