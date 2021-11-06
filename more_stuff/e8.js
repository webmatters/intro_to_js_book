// typeof NaN returns 'number'
// if typeof value retuns number and some other condition is true that can't be true for a number, then it must be NaN.

function isNotANumber(value) {
  if (typeof value === 'number') {
    if (value / 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isNotANumber(NaN));
