// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (n) => {return n};

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
  asyncIncrementor.valueOf = () => {return count}; //if need return number
  count++;
  return asyncIncrementor; //return function
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
  return new Promise(function (resolve) { //make new promice
    setTimeout(function () {
      resolve(n); //work if there is no errors
    }, 1001);
  })
};
const getDeepPropertiesCount = () => {
  ////////////
};

const createSerializedObject = () => {return null};

const toBuffer = () => {
};

const sortByProto = (array) => {
  var arr = array;
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
