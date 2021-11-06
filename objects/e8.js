// Create a function that returns a new copy of an object
// Two arguments - object to copy and array of keys to copy.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObject(obj, keys) {
  if (!keys) return Object.assign({}, obj);

  let newObj = {};

  keys.forEach((key) => {
    newObj[key] = obj[key];
  });

  return newObj;
}

console.log(copyObject(objToCopy, ['bar']));
