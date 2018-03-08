// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = function () {return arguments};

const createNotEnumerableProperty = (n) => {
  Object.defineProperty(Object.prototype, n, {
    enumerable: false, //hide property
    get: () => Function.prototype.n, //getter
    set: (n) => Function.prototype.n = n}); //setter
    return n;
};


const createProtoMagicObject = () => {
  function magic () {}; // typeOf func != typeOf obj
  magic.prototype = magic.__proto__; //make it equal
  return magic;
};

var counter = 0;
const incrementor = () => {
  incrementor.valueOf = () => {return counter}; //if need return number
  counter++;
  return incrementor; //return function
};

var count = 0;
const asyncIncrementor = () => {
  let promise = new Promise (function (resolve) { //create new promise
    setTimeout (resolve (count++), 0); //promice => fulfilled
  });
  return count;
};

const createIncrementer = () => {
  var obj = {
    count: 0, //counter
    next() { //method next fot iterable
      return {
        value: ++this.count
      };
    },
    [Symbol.iterator]() { //make the object iterable
      return {
        next: function() {
          return obj.next();
        }
      };
    }
  };
  return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (n) => {
  return new Promise(function (resolve) { //create new promice
    setTimeout(function () {
      resolve(n); //promise => fulfilled
    }, 1001); //timeout 1,001 sec
  });
};

const getDeepPropertiesCount = function () {
  var count = 0;
  function counter () {
    for (var key in arguments[0]) {
      if (arguments[0][key] !== undefined && typeof arguments[0][key] === 'object'){ //if there is an object in object
        count++; //count +1
        counter(arguments[0][key]); //recursion
      };
    };
  };
  counter(arguments[0]); //start counter
  return count;
};

const createSerializedObject = () => {return null};

const toBuffer = () => {
};

const sortByProto = function () {
  var arr = arguments[0];
  arr = arr.sort(function (a, b) {
    return Object.getPrototypeOf(a) - Object.getPrototypeOf(b); //sort by parents
  });
  return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
