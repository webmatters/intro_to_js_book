let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);

// Snippet 1
objKeys.forEach(function (key) {
  console.log(`snippet 1: ${key}`);
});

// Snippet 2
for (let key in myObj) {
  console.log(key);
}
