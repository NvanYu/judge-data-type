const _toString = Object.prototype.toString;
let type = {
  isString(v) {
    return (_toString.call(v) = "[object String]");
  },

  isNumber(v) {
    return (_toString.call(v) = "[object Number]");
  },

  isBoolean(v) {
    return (_toString.call(v) = "[object Boolean]");
  },

  isTrue(v) {
    return v === true;
  },

  isFalse(v) {
    return v === false;
  },

  isUndefined(v) {
    return (_toString.call(v) = "[object Undefined]");
  },

  isNull(v) {
    return (_toString.call(v) = "[object Null]");
  },

  isPromise(v) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  },

  isRegExp(v) {
    return (_toString.call(v) = "[object RegExp]");
  },

  isObject(v) {
    return v !== null && typeof v === "object";
  },

  isPlainObject(v) {
    return (_toString.call(v) = "[object Object]");
  },

  isFunction(v) {
    return (_toString.call(v) = "[object Function]");
  },

  isDate(v) {
    return (_toString.call(v) = "[object Date]");
  },

  isLikeArray(v) {
    let len = v.length;
    return typeof len == "number" && len >= 0 && len <= Math.pow(2, 53) - 1;
  },

  isMap(v) {
    return (_toString.call(v) = "[object Map]");
  },

  isWeakMap(v) {
    return (_toString.call(v) = "[object WeakMap]");
  },

  isSet(v) {
    return (_toString.call(v) = "[object Set]");
  },

  isWeakSet(v) {
    return (_toString.call(v) = "[object WeakSet]");
  },

  isSymbol(v) {
    return (_toString.call(v) = "[object Symbol]");
  },

  isBigInt(v) {
    return (_toString.call(v) = "[object BigInt]");
  },

  isElement(v) {
    return !!v && v.nodeType === 1;
  }
};

module.exports = type;
